"use client";
import { useEffect } from "react";

export default function DonutProgress() {
  useEffect(() => {
    const initDonutProgress = () => {
      try {
        const progressBar = document.querySelector(".progress");
        const progressNumber = document.querySelector(".progress-number");
        const progressNumberMark = document.querySelector(
          ".progress-number-mark"
        );
        const percentElement = document.querySelector(".percent");

        if (
          !progressBar ||
          !progressNumber ||
          !progressNumberMark ||
          !percentElement
        ) {
          console.error("One or more required elements not found");
          return;
        }

        const percentage = 75;
        const radius = progressBar.getAttribute("r");
        const circumference = 2 * Math.PI * radius;
        const strokeDashOffset =
          circumference - (percentage / 100) * circumference;

        progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
        progressBar.style.strokeDashoffset = strokeDashOffset;

        const animateProgressNumber = (num) => {
          const data = Math.round(num);
          progressNumber.innerHTML = data + "%";
        };

        const animateProgressNumberMark = (num) => {
          const data = Math.round(num * 10) / 10;
          percentElement.innerHTML = data + "%";
          progressNumberMark.style.left = percentage + "%";
        };

        setTimeout(() => {
          animateProgressNumber(percentage);
          animateProgressNumberMark(percentage);
        }, 500);
      } catch (error) {
        console.error("Error in DonutProgress:", error);
      }
    };

    initDonutProgress();
  }, []);

  return (
    <div
      className="progress-circle"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      {/* Your SVG and other HTML elements here */}
    </div>
  );
}
