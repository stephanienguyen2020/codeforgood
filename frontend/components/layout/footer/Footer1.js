import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer id="footer">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-4 footer-logo">
                <div className="logo_footer">
                  <img src="/assets/images/logo/logo2.png" alt="" />
                </div>
                <p>Protect young hearts, save young lives.</p>
              </div>
              <div className="col-md-4 widget">
                <h5 className="widget-title">Contact us</h5>
                <ul className="widget-link contact">
                  <li>
                    <p>Address</p>
                    <Link href="#">[Placeholder]</Link>
                  </li>
                  <li>
                    <p>Phone</p>
                    <Link href="#">+1 (302) 494 3133</Link>
                  </li>
                  <li className="email">
                    <p>Email</p>
                    <Link href="#">greer@heartinthegame.org</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 widget link">
                <h5 className="widget-title">Quick link</h5>
                <ul className="widget-link">
                  <li>
                    <Link href="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Register for Screenings</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="wrap-fx">
              <div className="Copyright">
                Copyright © {new Date().getFullYear()}. Designed by{" "}
                <Link href="">RhythmRunners.</Link>
              </div>
              <ul className="social">
                <li>
                  <Link href="https://www.instagram.com/sg_heartinthegame_/">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1.62C11.403 1.62 11.688 1.629 12.637 1.672C13.525 1.711 14.025 1.86 14.363 1.984C14.813 2.148 15.148 2.348 15.488 2.688C15.832 3.032 16.032 3.367 16.195 3.817C16.32 4.155 16.469 4.655 16.508 5.543C16.551 6.492 16.56 6.777 16.56 9.18C16.56 11.583 16.551 11.868 16.508 12.817C16.469 13.705 16.32 14.205 16.195 14.543C16.032 14.993 15.832 15.328 15.492 15.668C15.148 16.012 14.813 16.212 14.363 16.375C14.025 16.5 13.525 16.649 12.637 16.688C11.688 16.731 11.403 16.74 9 16.74C6.597 16.74 6.312 16.731 5.363 16.688C4.475 16.649 3.975 16.5 3.637 16.375C3.187 16.212 2.852 16.012 2.512 15.672C2.168 15.328 1.968 14.993 1.805 14.543C1.68 14.205 1.531 13.705 1.492 12.817C1.449 11.868 1.44 11.583 1.44 9.18C1.44 6.777 1.449 6.492 1.492 5.543C1.531 4.655 1.68 4.155 1.805 3.817C1.968 3.367 2.168 3.032 2.508 2.692C2.852 2.348 3.187 2.148 3.637 1.985C3.975 1.86 4.475 1.711 5.363 1.672C6.312 1.629 6.597 1.62 9 1.62ZM9 0C6.555 0 6.25 0.01 5.289 0.054C4.331 0.098 3.677 0.253 3.105 0.478C2.513 0.71 2.011 1.02 1.511 1.52C1.011 2.02 0.702 2.522 0.469 3.114C0.244 3.687 0.089 4.341 0.045 5.299C0.002 6.26 0 6.565 0 9.01C0 11.455 0.01 11.76 0.054 12.721C0.098 13.679 0.253 14.333 0.478 14.905C0.71 15.497 1.02 15.999 1.52 16.499C2.02 16.999 2.522 17.308 3.114 17.541C3.687 17.766 4.341 17.921 5.299 17.965C6.26 18.008 6.565 18.01 9.01 18.01C11.455 18.01 11.76 18 12.721 17.956C13.679 17.912 14.333 17.757 14.905 17.532C15.497 17.3 15.999 16.99 16.499 16.49C16.999 15.99 17.308 15.488 17.541 14.896C17.766 14.323 17.921 13.669 17.965 12.711C18.008 11.75 18.01 11.445 18.01 9C18.01 6.555 18 6.25 17.956 5.289C17.912 4.331 17.757 3.677 17.532 3.105C17.308 2.513 16.999 2.011 16.499 1.511C15.999 1.011 15.497 0.702 14.905 0.469C14.332 0.244 13.678 0.089 12.72 0.045C11.759 0.002 11.454 0 9.009 0H9Z"
                        fill="#798DA3"
                      />
                      <path
                        d="M9 4.38C6.44 4.38 4.38 6.44 4.38 9C4.38 11.56 6.44 13.62 9 13.62C11.56 13.62 13.62 11.56 13.62 9C13.62 6.44 11.56 4.38 9 4.38ZM9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12Z"
                        fill="#798DA3"
                      />
                      <path
                        d="M14.88 4.19C14.88 4.79 14.4 5.27 13.8 5.27C13.2 5.27 12.72 4.79 12.72 4.19C12.72 3.59 13.2 3.11 13.8 3.11C14.4 3.11 14.88 3.59 14.88 4.19Z"
                        fill="#798DA3"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
