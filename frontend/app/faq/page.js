"use client";
import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".next_slider-13",
    prevEl: ".prev_slider-13",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};
export default function Faq() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Frequently Asked Questions"
      >
        <div>
          <section className="tf-section tf-faq">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="tf-title center mb40"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <h2 className="title">hi we're here to help you</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tf-section FAQs">
            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                  <Accordion1 />
                </div>
              </div>
            </div>
          </section>
          <section className="tf-section questions">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="tf-title"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <h2 className="title mb20">
                      <span className="text-black">still have a question?</span>
                    </h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="question-content">
                    <p>
                      You can always reach out to us.{" "}
                      <br className="show-destop" />
                      We will answer to you shortly
                    </p>
                    <div className="wrap-btn justify-content-center">
                      <Link href="/contact" className="tf-button style1">
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
