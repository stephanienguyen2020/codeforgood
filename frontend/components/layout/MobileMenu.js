"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ isMobileMenu }) {
  const [isActive, setIsActive] = useState(1);

  const handleClick = (key) => {
    setIsActive((prevState) => (prevState === key ? null : key));
  };
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current-menu-item" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path))
      ? "current-menu-item"
      : "";

  return (
    <>
      <nav
        id="main-nav-mobi"
        className="main-nav"
        style={{ display: `${isMobileMenu ? "block" : "none"}` }}
      >
        <ul id="menu-primary-menu" className="menu">
          <li
            className={`menu-item menu-item-has-children ${checkParentActive([
              "/home-02",
              "/home-03",
            ])}`}
          >
            <Link href="/#">Home</Link>
          </li>
          <li
            className={`menu-item menu-item-has-children ${checkParentActive([
              "/project-grid",
              "/project-grid-2",
              "/project-grid-3",
              "/project-grid-4",
              "/project-grid-5",
              "/project-list",
              "/our-story",
              "/submit-project",
            ])}`}
          >
            <Link href="/#">Project</Link>
            <span className="arrow" onClick={() => handleClick(2)} />
            <ul
              className="sub-menu"
              style={{ display: `${isActive == 2 ? "block" : "none"}` }}
            >
              <li
                className={`menu-item ${checkCurrentMenuItem("/project-list")}`}
              >
                <Link href="/project-list">Project List</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem(
                  "/our-story"
                )}`}
              >
                <Link href="/our-story">Project Details</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem(
                  "/submit-project"
                )}`}
              >
                <Link href="/submit-project">Submit Project</Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item menu-item-has-children ${checkParentActive([
              "/token",
              "/connect-wallet",
              "/team-details",
              "/user-survey",
              "/faq",
              "/login",
              "/register",
              "/forget-password",
            ])}`}
          >
            <Link href="/#">Page</Link>
            <span className="arrow" onClick={() => handleClick(3)} />
            <ul
              className="sub-menu"
              style={{ display: `${isActive == 3 ? "block" : "none"}` }}
            >
              <li className={`menu-item ${checkCurrentMenuItem("/token")}`}>
                <Link href="/token">Token</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem(
                  "/connect-wallet"
                )}`}
              >
                <Link href="/connect-wallet">Connect Wallet</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem("/team-details")}`}
              >
                <Link href="/team-details">Team Details</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem(
                  "/user-survey"
                )}`}
              >
                <Link href="/user-survey">Submit IGO on chain</Link>
              </li>
              <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
                <Link href="/faq">FAQs</Link>
              </li>
              <li className={`menu-item ${checkCurrentMenuItem("/login")}`}>
                <Link href="/login">Login</Link>
              </li>
              <li className={`menu-item ${checkCurrentMenuItem("/register")}`}>
                <Link href="/register">Register</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem(
                  "/forget-password"
                )}`}
              >
                <Link href="/forget-password">Forget Password</Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item ${
              pathname === "/roadmap" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/roadmap">Roadmap</Link>
          </li>
          <li
            className={`menu-item menu-item-has-children ${checkParentActive([
              "/blog-grid",
              "/blog-list",
              "/blog-details",
            ])}`}
          >
            <Link href="/#">Blog</Link>
            <span className="arrow" onClick={() => handleClick(4)} />
            <ul
              className="sub-menu"
              style={{ display: `${isActive == 4 ? "block" : "none"}` }}
            >
              <li className={`menu-item ${checkCurrentMenuItem("/blog-grid")}`}>
                <Link href="/blog-grid">Blog Grid</Link>
              </li>
              <li className={`menu-item ${checkCurrentMenuItem("/blog-list")}`}>
                <Link href="/blog-list">Blog List</Link>
              </li>
              <li
                className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}
              >
                <Link href="/blog-details">Blog Detail</Link>
              </li>
            </ul>
          </li>
          <li
            className={`menu-item ${
              pathname === "/contact" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
