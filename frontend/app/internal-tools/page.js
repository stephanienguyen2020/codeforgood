
import Chart1 from "@/components/elements/Chart1"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Token() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Internal Dashboard">
                <div>
                    <section className="tf-section tf-token pt60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tf-title left mb40" data-aos-delay={500} data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Website Traffic
                                        </h2>
                                    </div>
                                    <div className="desc-token" data-aos-delay={500} data-aos="fade-up" data-aos-duration={800}>
                                        <div className="total-token">
                                            <p>Total Clicks: <span>10,000</span></p>
                                            <p>Total Users: <span> 5,000</span></p>
                                        </div>
                                        <ul className="describe_chart">
                                            <li>
                                                <img src="/assets/images/chart/color_1.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Blog</p>
                                                    <p className="number">25%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_2.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Donate</p>
                                                    <p className="number">15.3%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_3.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Contact</p>
                                                    <p className="number">12.7%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_4.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Sign In</p>
                                                    <p className="number">14.5%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_5.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Landing Page</p>
                                                    <p className="number">30%</p>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="/assets/images/chart/color_6.png" alt="" />
                                                <div className="desc">
                                                    <p className="name">Survey</p>
                                                    <p className="number">2.5%</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div data-aos="fade-left" data-aos-delay={500} data-aos-duration={800}>
                                        <Chart1 />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="tf-title left mt17 mb40" data-aos="fade-up" data-aos-duration={800}>
                                        <h2 className="title">
                                            Latest Users
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="tokenomics-wrapper" data-aos="fade-up" data-aos-duration={800}>
                                        <div className="box">
                                            <div className="td td1">
                                                <p>Name</p>
                                                <p>John Anderson</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>35</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$75</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>Yes</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>Yes</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Sarah Johnston</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>19</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$20</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>Yes</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>No</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Michael Green</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>21</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$168</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>No</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>No</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Emily Harris</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>26</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$121</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>Yes</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>No</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Tom Felton</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>37</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$1,500</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>Yes</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>No</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Justin Trudeau</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>52</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$0</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>No</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>No</p>
                                            </div>
                                        </div>
                                        <div className="box">
                                        <div className="td td1">
                                                <p>Name</p>
                                                <p>Michael Jordan</p>
                                            </div>
                                            <div className="td td2">
                                                <p>Age</p>
                                                <p>61</p>
                                            </div>
                                            <div className="td td3">
                                                <p>Money Donated</p>
                                                <p>$25,000</p>
                                            </div>
                                            <div className="td td4">
                                                <p>Screened?</p>
                                                <p>Yes</p>
                                            </div>
                                            <div className="td td5">
                                                <p>Athlete?</p>
                                                <p>Yes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}