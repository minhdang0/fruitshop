import React,{useContext} from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink, Link ,useNavigate } from 'react-router-dom';


import { AuthContext } from '../../contexts/AuthContext';
import logo from "../../assets/images/logo_fruit.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBell } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faYoutube, faTwitter } from'@fortawesome/free-brands-svg-icons';

import "./Header.css";


const Header = () => {
    const nav__links = [
        {
          path: "/home",
          display: "Trang chủ",
        },
      
        {
          path: "/fruit",
          display: "Hoa quả",
        },
        {
            path: "/vegetable",
            display: "Rau xanh",
        },
        {
            path: "/snack",
            display: "Ăn vặt",
        },
        {
          path: "/drink",
          display: "Đồ uống",
        },
        {
            path:"giftFruit",
            display:"Quà tặng trái cây"
        },
        {
            path:"/infomation",
            display:"Về chúng tôi"
        },
        
        {
            path: "/contact",
            display: "Liên hệ",
          },
      ];
      const navigate = useNavigate();
      const {user, dispatch} = useContext(AuthContext);

      const logout =() =>{
        dispatch({ type: "LOGOUT" });
        navigate("/login");
      }
      const toggleUserMenu = () => {
        const userMenu = document.getElementById("user-menu");
        if (userMenu) {
          userMenu.classList.toggle("show");
        } else {
          console.error("Element with ID 'user-menu' not found.");
        }
      };
      
  return (
    <header id='header' className='header' >
        <div className='header-top  '>
                    <div className='icon-connect d-flex align-intems-center justify-content-between'>
                        <FontAwesomeIcon icon={faFacebook}style={{ color: 'white' }}/> 
                        <FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />    
                        <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }} />     
                        <FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />      
                    </div>  
                    <div className='annouce'>
                                    <FontAwesomeIcon icon={faBell} style={{color:'white'}}  className='iconBell'/> 
                                    <span>Thông báo</span>
                                </div>
                    <div  className=' auth-links-container d-flex align-items-center  flex-right'  
                        onClick={toggleUserMenu}>
                        
                        {user ? (
                            <>
                                
                                <div className="photo-user" >
                                   {user.photo ? (
                                        <img src={user.photo} alt="Avatar" />
                                    ) : (
                                        <div className="default-avatar" >
                                            <i class="ri-user-5-fill"></i>
                                        </div> 
                                    )}
                                </div>
                                <div className='user-names align-items-center ' > {user.username}  </div>
                                <div>
                                    <ul className="dropdown-menu menu-size " id="user-menu">
                                        <li>
                                            <Link to="/profile"><span>Hồ sơ</span></Link>
                                        </li>
                                        <li>
                                            <Link to={`/history/${user._id}`}><span>Lịch sử mua hàng</span></Link>
                                        </li>
                                        <li onClick={() => logout()}>
                                            <span>Đăng xuất</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </>
                        ) :(<>
                           <div className='posts'>
                           <div className='auth-link'>
                                <Link  to = "/reagister" >Đăng ký</Link>
                            </div>
                            <span className='auth-link' style={{ color: 'white' }} >|</span>
                            <div className='auth-link'>
                                <Link  to = "/login">Đăng nhập</Link>
                            </div>
                           </div>
                       
                        </>)
                        }
                       
                    </div>
                </div>
                
        <Container >
            <Row>
                
                <div className='nav_wrapper d-flex align-intems-center justify-content-between'>
                    {/*-----logo-----*/}
                    <div className='logo flex-col'>
                        <Link to="/home">
                            <img src={logo} alt="" />
                        </Link>
                         <span className='name-shop'>Garden Goodness</span>   
                    </div>
                   
                    {/*---logo end---- */}
                    
                    <div className="navifation">
                        <ul className="menu d-flex align-items-center gap-2">
                             <li className="nav_item">
                                <div className="nav_link align-items d-flex">
                                <i className='ri-shield-check-line' ></i>
                                Đảm bảo chất lượng
                                </div>
                            </li>
                            <li className="nav_item">
                                <div className="nav_link align-items d-flex">
                                < i class="ri-takeaway-fill" ></i>
                                Free ship từ 200K
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                   

                    <div className='utilities flex-col hide-for-medium flex-right'>
                        <div className='header-nav header-nav-main nav-right nav nav-spacing-large nav-uppercase'>
                            <div className='search-bar'>
                                <input id="search" type="search" placeholder="Search..." autofocus required /> 
                                <button type="submit">< i class="ri-search-2-line"></i></button> 
                            </div>
                            <Link to="/shoppingCart"  style={{textDecoration:'none'}}>
                                    <div className='shopping-cart '>
                                        <i class="ri-shopping-cart-2-fill" ></i><button className='button-shoping-cart'>Giỏ hàng</button>
                                    </div>
                            </Link>
                            
                        </div>
                    </div>
            </div>
            <div className='header-bottom'>
                <ul className="menus d-flex align-items-center gap-4">
                    {nav__links.map((item, index) => (
                    <li className="nav_items" key={index}>
                        <NavLink
                        to={item.path}
                        className={(navClass) =>
                            navClass.isActive ? "active_link" : ""
                        }
                        >
                        {item.display}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header
