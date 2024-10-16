"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".next_slider-2",
    prevEl: ".prev_slider-2",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
import Link from "next/link";

export default function Project21() {
  return (
    <>
      <section className="tf-section project_2">
        <div className="container w_1690">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <h2 className="testimons title">
                  Testimonials <br className="show-destop" /> from our community
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container_inner">
                <div
                  className="swiper-container slider-2"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="project-box">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/parent_1.jpg"
                            alt=""
                          />
                          <div className="shape">
                            <img src="/assets/images/common/shape.png" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <span className="boder" />
                          <div className="content-inner">
                            <h5 className="heading">Maria Johnson</h5>
                            <p className="desc">
                              Heart in the Game's screening reassured us about
                              our daughter’s health in just minutes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-box">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/parent_2.jpg"
                            alt=""
                          />
                          <div className="shape">
                            <img src="/assets/images/common/shape.png" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <span className="boder" />
                          <div className="content-inner">
                            <h5 className="heading">Emily Rodriguez</h5>
                            <p className="desc">
                              Thank you, Heart in the Game, from the bottom of
                              our heart for saving our son’s life without any
                              hassle.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-box">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/parent_3.jpg"
                            alt=""
                          />
                          <div className="shape">
                            <img src="/assets/images/common/shape.png" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <span className="boder" />
                          <div className="content-inner">
                            <h5 className="heading">Eric Liu</h5>
                            <p className="desc">
                              Heart in the Game’s free EKG service was a
                              blessing. Now our son is back to playing sports
                              safely.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-box">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/parent_4.jpg"
                            alt=""
                          />
                          <div className="shape">
                            <img src="/assets/images/common/shape.png" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <span className="boder" />
                          <div className="content-inner">
                            <h5 className="heading">James Thompson</h5>
                            <p className="desc">
                              Heart in the Game gave us peace of mind. We’re so
                              relieved knowing our son’s heart is healthy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-box">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/parent_5.jpg"
                            alt=""
                          />
                          <div className="shape">
                            <img src="/assets/images/common/shape.png" alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <span className="boder" />
                          <div className="content-inner">
                            <h5 className="heading">Michael Harris</h5>
                            <p className="desc">
                              We appreciate Heart in the Game for giving us
                              peace knowing our child’s heart is in good shape.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="next_slider-2 next_slider">
                  <svg
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="prev_slider-2 prev_slider">
                  <svg
                    width={18}
                    height={16}
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8H1.5M1.5 8L8.25 1.25M1.5 8L8.25 14.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
