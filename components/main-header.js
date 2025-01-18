'use client';
import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import { usePathname } from "next/navigation";
import NavLink from "./navLink";



export default function MainHeader() {
  const path=usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImg.src} alt="A plate with food on it" width="300px" height="300px" />
        NextLevel food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/meals/share">Shared Meals</NavLink>
          </li>
          <li>
            <NavLink href="/meals/p1">Dynamic Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
