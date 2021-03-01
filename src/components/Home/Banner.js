import React from 'react'
import './Banner.css'
import TypeIt from 'typeit-react'

function Banner() {
    return (
        <div className="banner">
            <div className="banner-home">
                <div className="banner-home-promo">
                    <button className="banner-promo-button">OFFER</button>
                    <span className="banner-promo-text">100GBPS dedicated servers ready to launch</span>
                </div>
                <div className="banner-home-heading">
                    <div className="heading-fixed">
                        Buy
                    </div>
                    <div className="heading-text-effect">
                        <TypeIt
                            getBeforeInit={instance => {
                            instance
                            .type("Powerful")
                            .pause(750)
                            .delete(8)
                            .pause(750)
                            .type("Cheap")
                            .pause(750)
                            .delete(5)
                            .pause(750)
                            .type("Fasr")
                            .pause(750)
                            .delete(1)
                            .type("t")
                            .pause(750)
                            .delete(4)
                            .pause(500)
                            .type("reliable")
                            return instance.reset();
                        }}
                        />
                    </div>
                    <div className="heading-fixed">
                        Dedicated Servers
                    </div>
                    <div className="banner-text">
                        Lorem Ipsum,100GBPS dedicated servers ready to launch. Lorem Ipsum,100GBPS dedicated servers ready to launch. Lorem Ipsum,100GBPS dedicated servers ready to launch. Lorem Ipsum,100GBPS dedicated servers ready to launch.
                    </div>
                    <button className="button-medium">Learn more <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div className="banner-img">
                <img src="https://bestbuyrdp.netlify.app/static/hero-94427b67d5bbb7f0e2ae2b8b56b6f5e2.svg" alt="img"/>
            </div>
        </div>
        
    )
}

export default Banner
