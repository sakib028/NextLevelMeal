"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import HeaderBackground from "@/components/HeaderBackground";
// Adjust the path as necessary
import styles from "./Header.module.css"; // Adjust the path as necessary
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <div style={{ position: "relative" }}>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" priority />
          <p>Next Level Page</p>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/meals"
                className={
                  path.startsWith("/meals")
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={
                  path.startsWith("/community")
                    ? `${styles.link} ${styles.active}`
                    : styles.link
                }
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
