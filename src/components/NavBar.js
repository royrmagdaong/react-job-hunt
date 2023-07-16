import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [user, setUser] = useState('')

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const logout = () => {
        localStorage.removeItem('user')
        setUser('')
    }

    return (
        <div className={styles['nav-container']}>
            <nav className={styles.navbar}>
                <h1 className={styles.title}>Job Hunt</h1>
                <ul className={styles["nav-ul"]}>
                    <li className={styles["search-jobs"]}>
                        <Link href="/">Search jobs</Link>
                    </li>
                    <li className={styles["about"]}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles["login"]}>
                        {
                            user?<a onClick={logout}>Logout</a>:<Link href="/login">Login</Link>
                        }
                    </li>
                    <li className={styles["login"]} style={{marginLeft: '8px'}}>
                        {
                            user?<>{user.name}</>:''
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;