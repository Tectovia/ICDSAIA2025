import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Countdown = () => {
  const targetDate = new Date("2025-02-28T23:59:59"); // Example target date for countdown

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Function to update countdown values every second
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        // Countdown finished, set to zeros
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update countdown initially and every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [targetDate]);

  // General scroll reveal effect
  useEffect(() => {
    const elementsToReveal = document.querySelectorAll(".reveal");
    elementsToReveal.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Start animation when 80% of element is in view
            end: "bottom 20%", // End animation when 20% of element is in view
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  // Animation for countdown numbers using GSAP
  useEffect(() => {
    gsap.fromTo(
      ".time-box span.seconds",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.seconds]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.minutes",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.minutes]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.hours",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.hours]);

  useEffect(() => {
    gsap.fromTo(
      ".time-box span.days",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [countdown.days]);

  return (
    <div>
      <div className="countdown reveal">
        <h3 className="text-black font-extralight reveal">
          Countdown for Conference
        </h3>
        <div className="countdown-timer reveal">
          <div className="time-box reveal">
            <motion.span
              className="days"
              key={countdown.days}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 2 }}
            >
              {countdown.days}
            </motion.span>
            <p>Days</p>
          </div>
          <div className="time-box reveal">
            <motion.span
              className="hours"
              key={countdown.hours}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 2 }}
            >
              {countdown.hours}
            </motion.span>
            <p>Hours</p>
          </div>
          <div className="time-box reveal">
            <motion.span
              className="minutes"
              key={countdown.minutes}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 2 }}
            >
              {countdown.minutes}
            </motion.span>
            <p>Minutes</p>
          </div>
          <div className="time-box reveal">
            <motion.span
              className="seconds"
              key={countdown.seconds}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 2 }}
            >
              {countdown.seconds}
            </motion.span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
