"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function Menu() {
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
    <nav id="main-nav" className="main-nav">
      <ul id="menu-primary-menu" className="menu">
        <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
          <Link href="/">Home</Link>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/project-list",
            "/our-story",
            "/submit-project",
            "/faq",
          ])}`}
        >
          <Link href="/project-details">Our Story</Link>
          <ul className="sub-menu">
            <li className={`menu-item ${checkCurrentMenuItem("/faq")}`}>
              <Link href="/faq">FAQs</Link>
            </li>
          </ul>
        </li>
        <li
          className={`menu-item menu-item-has-children ${checkParentActive([
            "/internal-tools",
            "/team-details",
            "/user-survey",
            "/login",
            "/register",
            "/forget-password",
          ])}`}
        >
          <Link href="#">Screening Registration</Link>
          <ul className="sub-menu">
            <li
              className={`menu-item ${checkCurrentMenuItem("/internal-tools")}`}
            >
              <Link href="/internal-tools">Internal Tool</Link>
            </li>

            <li className={`menu-item ${checkCurrentMenuItem("/user-survey")}`}>
              <Link href="/user-survey">Survey</Link>
            </li>
          </ul>
        </li>
        <li className={`menu-item ${checkCurrentMenuItem("/blog-grid")}`}>
          <Link href="/blog-grid">Blog</Link>
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
  );
}
