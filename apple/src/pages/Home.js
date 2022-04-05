import React from 'react'

function Home() {
    return (
        <>
            <section className="homepage-section-one">
                <div className="top-text">
                    <div className="uni">
                        <img src="assets/images/unicef.png" className="uni-logo" />
                    </div>
                    <a href="/" className="donate-link">
                        <h4>Donate to support families affected by the war in Ukraine ↗</h4>
                    </a>
                </div>
            </section>

            <section className="iphone-hero">
                <div className="iphone-text-section">
                    <h2 className="headline">iPhone 13 Pro</h2>
                    <h3 className="subhead">Oh. So. Pro.</h3>
                    <div className="cta-links">
                        <a href="/">Learn more </a>
                        <a href="/">Buy </a>
                    </div>
                </div>
            </section>

            <section className="homepage-section-two">
                <h3>The new</h3>
                <div className="iphonese-cont">
                    <img src="assets/images/iphonese.png" className="iphonese-img" />
                </div>
                <h3>Love the power. Love the price.</h3>
                <div className="cta-links">
                    <a href="/">Learn more </a>
                    <a href="/">Buy </a>
                </div>
            </section>

            <section className="homepage-section-three">
                <div className="watch-cont">
                    <img src="assets/images/watchHeader.png" className="watch-img" />
                </div>
                <h3>It's our largest display yet.</h3>
                <div className="cta-links">
                    <a href="/">Learn more </a>
                    <a href="/">Buy </a>
                </div>
            </section>

            <section className="row">
                <div className="column">
                    <div className="homepage-section-four">
                        <div className="ipad-cont">
                            <img src="assets/images/ipadairlogo.png" className="ipad-img" />
                        </div>
                        <h4 className="ipad-text">Light. Bright. Full of might.</h4>
                        <div className="cta-links">
                            <a href="/">Learn more </a>
                            <a href="/">Buy </a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="headline iphoneHeader">iPhone 13</h2>
                    <div className="homepage-section-five">
                        <h4 className="iphone-text">Your new superpower.</h4>
                        <div className="cta-links-iphone">
                            <a href="/">Learn more </a>
                            <a href="/">Buy </a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="headline iphoneHeader">Studio Display</h2>
                    <div className="homepage-section-six">
                        <h4 className="iphone-text">A sight to be bold.</h4>
                        <div className="cta-links-iphone">
                            <a href="/">Learn more </a>
                            <a href="/">Buy </a>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h2 className="headline iphoneHeader">Mac Studio</h2>
                    <div className="homepage-section-seven">
                        <h4 className="iphone-text">Empower station.</h4>
                        <div className="cta-links-iphone">
                            <a href="/">Learn more </a>
                            <a href="/">Buy</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home