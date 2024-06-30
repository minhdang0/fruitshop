import product01 from'../images/product01.jpg';
import product02 from'../images/product02.png';
import product03 from'../images/product03.jpg';
import product04 from'../images/product04.jpg';
import productsale01 from'../images/saleproduct01.jpg';
const products = [
  {
    id:"01",
    title:"Dưa hấu Nhật Bản (4kg)",
    price:'85000',
    quantity: 32,
    reviews:4.8,
    sales:84,
    type:"fruit",
    discount:10,
    photo:product01,
    featured:true
  },
  {
    id:"02",
    title:"Nước ép Vfresh 1L nho",
    price:'52000',
    quantity: 84,
    reviews:4.8,
    sales:100,
    type:"drink",
    discount:15,
    photo:product02,
    featured:true
  },{
    id:"03",
    title:"Snack Lay's Stax  Classic",
    price:'31000',
    quantity: 72,
    reviews:4.8,
    sales:100,
    type:"snack",
    discount:15,
    photo:product03,
    featured:true
  },
  {
    id:"04",
    title:"Nho Mỹ (800g)",
    price:'110000',
    quantity: 15,
    reviews:4.8,
    sales:90,
    type:"fruit",
    discount:10,
    photo:product04,
    featured:true
  },
  {
    id:"05",
    title:"Nhãn Bắp Cải Vũng Tàu",
    price:"64000",
    quantity: 15,
    reviews:4.8,
    sales:110,
    type:"fruit",
    discount:15,
    photo:productsale01,
    featured:true
  }
  
  
]
export default products;