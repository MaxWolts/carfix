import logo from '../../assets/logo.svg'
import styles from './styles.module.css'
import {useState} from 'react'
import MenuMobile from './MenuMobile'
const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const isLoginHandle = () => {
        setIsLogin(!isLogin)
    }
  return (
    <header className={styles.header}>
        <img src={logo} alt="carfix logo"></img>
        <div className={styles.headerLeftPart}>
            <nav className={styles.headerNav}>
                <ul>
                    <li>
                        <a href="">Product</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                </ul>
            </nav>
            { !isLogin? <button className={styles.buttonLogin} onClick={isLoginHandle}>Login</button> :
                <div>
                    <button className={styles.buttonIcon} aria-label='shopping cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </button>
                    <button className={styles.buttonIcon} aria-label='profile'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </button>
                </div>
            }
        </div>
        <MenuMobile/>
    </header>
  )
}

export default Header