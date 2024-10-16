
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import SpotifyPlaylist from "@/components/elements/SpotifyPlaylist.js"

export default function BlogGrid() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="The Heart: Stories and Facts">
                <div>
                    <section className="tf-section tf-blog pt60">
                        <div className="container">
                            
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/damarhamlin.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            
                                            <Link href="/blog-details" className="tag">Real Stories</Link>
                                            <h5 className="title"><Link href="/blog-details">Damar Hamlin: An NFL Story</Link></h5>
                                            <p>When Damar Hamlin's heart stopped, millions held their breath. Monday night in Cincinnati, the 24-year-old football player had a cardiac arrest after...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/japan.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real World</Link>
                                            <h5 className="title"><Link href="/blog-details">Japan: The Heart Healthiest Country in the World</Link></h5>
                                            <p>In the land of longevity, Japan stands as a global leader in heart health. With one of the lowest rates of cardiovascular disease, the country's diet, lifestyle, and healthcare system have become models for the world to follow...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/EKG_COOL.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real Facts</Link>
                                            <h5 className="title"><Link href="/blog-details">ECG's identifies 92% of abnormalities!</Link></h5>
                                            <p>Electrocardiograms (ECGs) have long been a critical tool in cardiac care, and recent studies show they can detect 92% of heart abnormalities. This non-invasive test provides early detection, allowing for timely interventions that can save lives...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/Alex-Trebek.jpg.webp" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real Stories</Link>
                                            <h5 className="title"><Link href="/blog-details">Alex Trebek: A Jeopardy Story</Link></h5>
                                            <p>For over three decades, Alex Trebek was the face of Jeopardy!, captivating audiences with his sharp wit and calm demeanor. As the beloved host battled pancreatic cancer, his resilience became an inspiration to millions...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/meddiet.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real World</Link>
                                            <h5 className="title"><Link href="/blog-details">The Mediterranean: A Diet for Heart Health</Link></h5>
                                            <p>Known for its rich flavors and fresh ingredients, the Mediterranean diet has been praised for reducing the risk of heart disease and sudden cardiac arrests. Packed with olive oil, vegetables, and lean proteins, this way of eating has proven to keep the heart strong and resilient...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="assets/images/scapic.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real Facts</Link>
                                            <h5 className="title"><Link href="/blog-details">7,000-10,000 students die annually from SCA.</Link></h5>
                                            <p>Each year, between 7,000 and 10,000 students lose their lives to sudden cardiac arrest, often without warning. This silent killer highlights the need for increased awareness, early detection, and access to life-saving measures such as defibrillators in schools...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="/assets/images/fabrice.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real Stories</Link>
                                            <h5 className="title"><Link href="/blog-details">Fabrice Muamba: A FA Soccer Story</Link></h5>
                                            <p>In March 2012, during an FA Cup match, Fabrice Muamba collapsed on the field, suffering from sudden cardiac arrest. The Bolton midfielder’s heart stopped for 78 minutes as medics fought to save him. Against all odds, Muamba survived, becoming a symbol of resilience and a reminder of the fragility of life in professional sports...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="/assets/images/italianperson.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real World</Link>
                                            <h5 className="title"><Link href="/blog-details">Italy: The Boot's Approach to SCA.</Link></h5>
                                            <p>In Italy, a strong focus on heart health has led to widespread public awareness and preventative measures against sudden cardiac arrest. With mandatory CPR training in schools and defibrillators in public spaces, the country’s proactive approach is saving lives and setting an example for others...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="grid-box">
                                        <div className="image">
                                            <img src="/assets/images/Heart-Screening-2-copy.jpeg" alt="" />
                                        </div>
                                        <div className="content">
                                            <Link href="/blog-details" className="tag">Real Facts</Link>
                                            <h5 className="title"><Link href="/blog-details">One in 300 youth has an undetected heart condition that puts them at risk for SCA.</Link></h5>
                                            <p>An alarming statistic reveals that one in 300 youth unknowingly lives with a heart condition that could lead to sudden cardiac arrest. These hidden risks underscore the importance of early screening and increased access to life-saving equipment in schools and sports arenas...</p>
                                        </div>
                                        <Link href="/blog-details" className="tf-button style1">
                                            Read more
                                        </Link>
                                    </div>
                                    
                                </div>
                                <SpotifyPlaylist />
                            </div>
                        </div>
                    </section>
                    
                </div>

            </Layout>
        </>
    )
}