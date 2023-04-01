import styles from '@/styles/NavBar.module.css'

const NavBar = () => {
    return ( 
        <nav className={styles.navbar}>
            <h1 className={styles.title}>Job Hunt</h1>
            <ul>
                <li>Search Job</li>
                <li>About</li>
            </ul>
        </nav>
    );
}
 
export default NavBar;