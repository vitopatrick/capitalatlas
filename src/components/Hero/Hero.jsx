import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
          height: "70dvh",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero__overlay">
          <div className="container py-5">
            {/* header CTA */}
            <div>
              <h4 className="text-white font-weight-bold fs-1 fw-bolder">
                The Most Reliable <br /> Cryptocurrency platform
              </h4>
              <p className="text-white">
                Upgrade the way you trade, Trade wuth the world's largest retail
                broker and benefit from better the market conditions, Enjoy our
                unique copy trading feature with our low risk automated trading
                system.
              </p>
              <div className="mt-4">
                <Link to="/register" className="bg-white p-3 rounded me-4">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
