"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    750: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 10,
      spaceBetween: 30,
    },
  },
};

import Accordion1 from "@/components/elements/Accordion1";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function SubmitIgo() {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle="Let us learn more about you."
      >
        <div>
          <section className="tf-section project-info pt60 pb60">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form action="#">
                    <div className="project-info-form">
                      <h6 className="title">Basic Information</h6>
                      <div className="form-inner">
                        <fieldset>
                          <label>Type of User</label>
                          <div className="form-inner">
                            <ul className="list">
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="a-opt"
                                />
                                <label htmlFor="a-opt" className="label">
                                  Parent
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Student
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="c-opt"
                                />
                                <label htmlFor="c-opt" className="label">
                                  Volunteer
                                </label>
                              </li>
                            </ul>
                          </div>
                        </fieldset>
                        <fieldset>
                          <label>Age</label>
                          <input
                            type="text"
                            placeholder="Enter your current age"
                            required
                          />
                        </fieldset>
                        <fieldset>
                          <label>Gender</label>
                          <div className="form-inner">
                            <ul className="list">
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="a-opt"
                                />
                                <label htmlFor="a-opt" className="label">
                                  Male
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Female
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="c-opt"
                                />
                                <label htmlFor="c-opt" className="label">
                                  Non-Binary
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="d-opt"
                                />
                                <label htmlFor="d-opt" className="label">
                                  Other
                                </label>
                              </li>
                            </ul>
                          </div>
                        </fieldset>
                        <fieldset>
                          <label htmlFor="message">Race</label>
                          <div className="form-inner">
                            <ul className="list">
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="a-opt"
                                />
                                <label htmlFor="a-opt" className="label">
                                  White/Caucasian
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Black/African American
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Asian
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Hispanic/Latinx
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Native/Indigenous
                                </label>
                              </li>
                              <li className="list__item">
                                <input
                                  type="radio"
                                  className="radio-btn"
                                  name="choice"
                                  id="b-opt"
                                />
                                <label htmlFor="b-opt" className="label">
                                  Pacific Islander
                                </label>
                              </li>
                            </ul>
                          </div>
                        </fieldset>
                        <fieldset>
                          <label>Are you, or have you been, an athlete?</label>
                          <ul className="list">
                            <li className="list__item">
                              <input
                                type="radio"
                                className="radio-btn"
                                name="choice"
                                id="a-opt"
                              />
                              <label htmlFor="a-opt" className="label">
                                Yes
                              </label>
                            </li>
                            <li className="list__item">
                              <input
                                type="radio"
                                className="radio-btn"
                                name="choice"
                                id="b-opt"
                              />
                              <label htmlFor="b-opt" className="label">
                                No
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                        <fieldset>
                          <label>Location</label>
                          <input
                            type="text"
                            placeholder="City, State"
                            required
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className="wrap-btn">
                      <button type="submit" className="tf-button style2">
                        Submit Information!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
