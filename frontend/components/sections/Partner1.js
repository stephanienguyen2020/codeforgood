import Link from "next/link";

export default function Partner1() {
  return (
    <>
      <section className="tf-section tf_partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <h2 className="title">Our Partners</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className="partner-wrapper"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <Link href="/home-02" className="image">
                  <img src="/assets/images/partner/g1.png" alt="" />
                </Link>
                <Link href="/home-02" className="image ">
                  <img
                    className="active"
                    src="/assets/images/partner/g2.png"
                    alt=""
                  />
                </Link>
                <Link href="/home-02" className="image">
                  <img src="/assets/images/partner/g3.png" alt="" />
                </Link>
                <Link href="/home-02" className="image">
                  <img src="/assets/images/partner/g4.png" alt="" />
                </Link>
                <Link href="/home-02" className="image">
                  <img src="/assets/images/partner/g5.png" alt="" />
                </Link>
                <Link href="/home-02" className="image">
                  <img src="/assets/images/partner/g6.png" alt="" />
                </Link>
              </div>
              <div
                className="wrap-btn"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <a
                  href="/assets/images/qrcode.png"
                  className="tf-button style3 text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
