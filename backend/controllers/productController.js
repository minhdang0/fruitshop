import Product from "../models/Product.js";

// create new Product
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

//update Product
export const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Try again",
    });
  }
};

//delete Product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully delete",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Try again",
    });
  }
};

//getSingle Product
export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const Product = await Product.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "get single Product successfully",
      data: Product,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found !!",
    });
  }
};




// get Product by search
export const getProductBySearch = async (req, res) => {
    const title = new RegExp(req.query.title, "i"); // Tìm kiếm không phân biệt hoa thường
    try {
      const products = await Product.find({
        title,
       
      });
  
      res.status(200).json({
        success: true,
        message: "Get all Products successfully",
        count: `${products.length}`,
        data: products,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "Not Found!",
      });
    }
};

//get featured Product
export const getFeaturedProduct = async (req, res) => {
  try {
    const Products = await Product.find({ featured: true })
      .limit(8);
    res.status(200).json({
      success: true,
      message: "Successfull",
      data: Products,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};


//get discount >0
export const getDiscountedProducts = async (req, res) => {
  try {
      
      const discountedProducts = await Product.find({ discount: { $gt: 0 } });

      res.status(200).json({
        success:true,
        message:"Tìm kiếm thành công",
        data:discountedProducts});
  } catch (error) {
      res.status(404).json({
        success:false,
        message: "Lỗi khi lấy sản phẩm giảm giá"
      });
  }
};
export const filterProductsByType = async (req, res) => {
  const { type } = req.query;

  try {
    // Kiểm tra xem loại sản phẩm có được cung cấp hay không
    if (!type) {
      return res.status(400).json({ 
        success: false, 
        message: "Không có loại sản phẩm trên" });
    }

    // Tìm kiếm các sản phẩm theo loại
    const products = await Product.find({ type });

    // Kiểm tra xem có sản phẩm nào được tìm thấy hay không
    if (products.length === 0) {
      return res.status(404).json({ 
        success: false, 
        message: "Không có sản phẩm nào" });
    }

   
    return res.status(200).json({ 
      success: true, 
      message:"Tìm kiếm thành công!",
      data:products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
       success: false, 
       message: "Lỗi máy chủ" });
  }
};