"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleConnect = () => {
    router.push("/login");
  };

  return (
    <>
      <header
        id="header_main"
        className={`header ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="container">
          <div
            id="site-header-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="header__logo">
              <Link href="/">
                <img
                  src="assets/images/logo/logo.png"
                  alt=""
                  style={{ maxHeight: "60px", width: "auto" }}
                />
              </Link>
            </div>
            <div
              className={styles.header__right}
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "50px", // Increase this value to move the menu further right
              }}
            >
              {isMobile ? <MobileMenu isMobileMenu={isMobileMenu} /> : <Menu />}
              <div className={styles.header__action}>
                <a onClick={handleConnect} className="tf-button style1">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
