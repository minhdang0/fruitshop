import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Thêm sản phẩm vào giỏ hàng
export const addToCart = async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  try {
    // Kiểm tra xem sản phẩm có tồn tại không
    const product = await Product.findOne({title:title});
    if (!product) {
      return res.status(404).json({ success: false, message: "Sản phẩm không tồn tại" });
    }

    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).json({ success: false, message: "Số lượng sản phẩm không hợp lệ" });
    }

   
    let cart = await Cart.findOne({ userId });

    if (cart) {
      const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({
          title,
          quantity,
        });
      }
    } else {
     
      cart = new Cart({
        userId,
        items: [{ title, quantity }],
      });
    }

    // Lưu giỏ hàng và trả về kết quả thành công
    await cart.save();
    return res.status(200).json({ 
      success: true, 
      message: "Sản phẩm đã được thêm vào giỏ hàng" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ 
      success: false, 
      message: "Đã xảy ra lỗi máy chủ" });
  }
};

// Lấy giỏ hàng của người dùng
export const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateCartItem = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const itemIndex = cart.items.findIndex((item) => item.productId.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity = quantity;
      cart = await cart.save();
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa sản phẩm khỏi giỏ hàng
export const deleteCartItem = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = cart.items.filter((item) => !item.productId.equals(productId));
    cart = await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Xóa toàn bộ giỏ hàng
export const clearCart = async (req, res) => {
  const { userId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.items = [];
    cart = await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tính tổng giá trị giỏ hàng
export const calculateTotal = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    let total = 0;
    cart.items.forEach((item) => {
      total += item.quantity * (item.price - (item.price * (item.discount / 100)));
    });
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
