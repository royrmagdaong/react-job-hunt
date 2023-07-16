import styles from '@/styles/NavBar.module.css'
import Link from 'next/link'

const NavBar = () => {
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
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;