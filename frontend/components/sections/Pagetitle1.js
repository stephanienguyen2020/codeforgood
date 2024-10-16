"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: ".btn-next-main",
    prevEl: ".btn-prev-main",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 80000,
  },
  breakpoints: {
    1280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

import Link from "next/link";

export default function Pagetitle1() {
  return (
    <>
      <section className="page-title">
        <div className="icon_bg">
          <img src="/assets/images/backgroup/bg_inner_slider.png" alt="" />
        </div>
        <div className="swiper-container slider-main">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            <SwiperSlide>
              <div className="slider-st1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            Protect Young Hearts,{" "}
                            <span style={{ color: "#db4a2b" }}> </span>Save
                            Young Lives
                          </h1>
                          <p className="sub-title">
                            At Heart in the Game, we work to prevent sudden
                            cardiac arrest in youth by raising awareness and
                            ensuring early detection through heart screenings
                            and community outreach.
                          </p>
                          <div className="wrap-btn">
                            <Link
                              href="/project-list"
                              className="tf-button style2 text-white"
                            >
                              Register for a screening
                            </Link>
                          </div>
                        </div>
                        <div className="image">
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>

                          <img
                            className="img_main"
                            src="assets/images/slider/Furore.jpeg"
                            alt=""
                          />
                          <div className="icon icon2">
                            <img src="assets/images/frontpageimg.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-st1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            <span>Sudden Cardiac Arrest is a</span>
                            <br />
                            <span>Serious Threat</span>
                            <br />
                            <span>to Young </span>
                            <br />
                            <span>Athletes</span>
                            <br />
                          </h1>
                          <div className="facts-container">
                            <div className="fact">
                              <h3>1 in 300</h3>
                              <p>youth has an undetected heart condition</p>
                            </div>
                            <div className="fact">
                              <h3>Every 3 days</h3>
                              <p>a young athlete dies from SCA in the US</p>
                            </div>
                            <div className="fact">
                              <h3>80%</h3>
                              <p>of SCA victims had no prior symptoms</p>
                            </div>
                          </div>
                        </div>
                        <div className="image">
                          <br></br>
                          <br></br>
                          <br></br>

                          <img
                            className="img_main"
                            src="assets/images/slider/black_atheletes.png"
                            alt=""
                          />
                          <div className="icon icon2">
                            <img src="assets/images/frontpageimg.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-st1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            <span>
                              <span style={{ color: "#db4a2b" }}>92%</span> of
                              Cases
                            </span>

                            <br />
                            <span> Can Be </span>
                            <br />
                            <span>
                              <span style={{ color: "#db4a2b" }}>
                                {" "}
                                Detected{" "}
                              </span>{" "}
                              by{" "}
                            </span>
                            <br />
                            <span> EKGs </span>
                          </h1>
                          <div className="wrap-btn">
                            <Link
                              href="/project-list"
                              className="tf-button style2 text-white"
                            >
                              Register for a screening
                            </Link>
                          </div>
                        </div>
                        <div className="image">
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>

                          <img
                            className="img_main"
                            src="assets/images/slider/ath1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-st1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-slider">
                        <div className="content-box">
                          <h1 className="title">
                            <span>
                              <span style={{ color: "#db4a2b" }}>89% </span>{" "}
                              Reduction
                            </span>

                            <br />
                            <span> SEEN in deaths </span>
                            <br />

                            <span>
                              <h3>related to sudden</h3>
                              <h3> cardiac arrest </h3>
                              <h3> when required in Italy</h3>
                            </span>
                          </h1>

                          <div className="wrap-btn">
                            <Link
                              href="/project-list"
                              className="tf-button style2 text-white"
                            >
                              Register for a screening
                            </Link>
                          </div>
                        </div>
                        <div className="image">
                          <br></br>
                          <br></br>

                          <img
                            className="img_main"
                            src="assets/images/slider/black_atheletes2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="btn-next-main">
            <i className="far fa-angle-right" />
          </div>
          <div className="btn-prev-main">
            <i className="far fa-angle-left" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  );
}
