'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="flat-accordion aos-init aos-animate" data-aos="fade-up" data-aos-duration={800}>
                <div className={isActive === 1 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 1 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(1)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What is an EKG screening?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>An EKG (Electrocardiogram) screening is a test that checks the electrical activity of your heart to identify any potential heart conditions.</p>
                </div>
                <div className={isActive === 2 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 2 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(2)}>
                        <span className="icon-Icon">
                        </span>
                        <span>Why do young athletes need an EKG screening?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>KG screenings can help detect underlying heart conditions that may not have symptoms but could be dangerous during intense physical activity.</p>
                </div>
                <div className={isActive === 3 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 3 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(3)}>
                        <span className="icon-Icon">
                        </span>
                        <span>Is an EKG screening painful?</span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>No, an EKG screening is non-invasive and painless. Sensors are placed on your chest, arms, and legs to measure your heart’s electrical signals.</p>
                </div>
                <div className={isActive === 4 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 4 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(4)}>
                        <span className="icon-Icon">
                        </span>
                        <span>What do abnormal EKG results mean? </span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 4 ? "block" : "none"}` }}>Abnormal results could indicate a variety of heart conditions, but they do not always mean something is wrong. Further tests may be needed for confirmation.</p>
                </div>
                <div className={isActive === 5 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 5 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(5)}>
                        <span className="icon-Icon">
                        </span>
                        <span>Can an EKG screening prevent sudden cardiac arrest? </span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 5 ? "block" : "none"}` }}>While an EKG cannot prevent cardiac arrest, it can identify conditions that may increase the risk, allowing for early intervention.</p>
                </div>
                <div className={isActive === 6 ? "flat-toggle active" : "flat-toggle"}>
                    <div className={isActive === 6 ? "h7 toggle-title active" : "h7 toggle-title"} onClick={() => handleClick(6)}>
                        <span className="icon-Icon">
                        </span>
                        <span>At what age should I start getting EKG screenings as an athlete? </span>
                    </div>
                    <p className="toggle-content" style={{ display: `${isActive === 6 ? "block" : "none"}` }}> It’s recommended to start as a teenager or earlier if you have a family history of heart disease or any symptoms of heart conditions.</p>
                </div>
            </div>
        </>
    )
}
