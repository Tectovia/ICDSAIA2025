import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../assets/css/footer.css"; // Import your footer.css stylesheet

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.from(".footer_text h4, .footer_text p, .contact h6", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer_text">
        <motion.div
          className="footer_text1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about_conf">
            <h4>About conference</h4>
            <p>
              The conference aims at bringing together researchers and
              practitioners in the world working on Data Science and Artificial
              Intelligence Applications. This conference seeks to bring together
              international researchers to present papers and generate
              discussions in recent trends and developments of computing.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="footer_text2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="contact">
            <h4>Contact</h4>
            <h6>
              <span>
                {" "}
                <i className="bx bxs-user"></i>
              </span>{" "}
              Dr. M. Ramalingam
            </h6>
            <h6>
              <span>
                {" "}
                <i className="bx bxs-phone"></i>
              </span>{" "}
              9677688934
            </h6>
            <h6>
              <span>
                {" "}
                <i className="bx bxl-gmail"></i>
              </span>{" "}
              icdsaia@gascgobi.ac.in
            </h6>
          </div>
        </motion.div>
      </div>
      <div className="counter">
        {/* Counter section */}
        <div className="flag">
          <center>
            <script
              type="text/javascript"
              src="//widget.supercounters.com/ssl/flag.js"
            ></script>
            <script type="text/javascript">
              {`
              sc_flag(1660407, "269a9c", "ffffff", "cccccc", 2, 10, 0, 0);
              `}
            </script>
            <br />
            <noscript>
              <a href="http://www.supercounters.com/">Flag Counter</a>
            </noscript>
          </center>
        </div>
      </div>
      {/* Social media icons */}
      <div className="social">
        <div className="social_icons">
          <a href="mailto:icdsaia@gascgobi.ac.in?subject=Contact Support">
            <i className="bx bxl-gmail"></i>
          </a>
          <a href="https://t.me/icdsaia">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://chat.whatsapp.com/HHDlkaECOmoGlo7bkLEkb6">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100091391350347">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/international-conference-on-data-science-and-artificial-intelligence-application-a873bb270">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
