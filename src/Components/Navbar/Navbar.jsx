import style from './Navbar.module.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
    const [menu, setmenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle(style["nav_links-visible"]);
        e.target.classList.toggle(style.open);
    }

    return (
        <div className={style.navbar}>
            <div className={style.nav_logo}>
                <img src={logo} alt="" />
                <p>Ashrovia-Luxury</p>
            </div>

            <CiMenuFries 
                className={style["nav-dropdown"]} 
                size={30} 
                onClick={dropdown_toggle}
            />

            <ul ref={menuRef} className={style.nav_links}>
                <li onClick={() => { setmenu("shop") }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setmenu("men") }}>
                    <Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === "men" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setmenu("women") }}>
                    <Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === "women" ? <hr /> : <></>}
                </li>

                <li onClick={() => { setmenu("kids") }}>
                    <Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>
                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>

            <div className={style.login}>
                <button>
                    <Link to='login' style={{ textDecoration: 'none' }}>Login</Link>
                </button>

                <Link to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>

                <div className={style["nav-cart-counter"]}>
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
