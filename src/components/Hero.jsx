import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

import cvEn from "../docs/CvJoanSantiagoVelasquezArias-En.pdf";
import cvEs from "../docs/HvJoanSantiagoVelasquezArias-Es-1.pdf";

const Hero = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className="flex items-center gap-5 flex-wrap">
            <h1 className={`${styles.heroHeadText} text-white`}>
              {t("hero.greeting")} <span className="text-[#915EFF]">{t("hero.name")}</span>
            </h1>

            <div className="relative">
              <button
                onClick={() => setToggle(!toggle)}
                className="bg-[#915EFF1A] border-2 border-[#915EFF] text-[#915EFF] py-2 px-5 rounded-xl font-bold backdrop-blur-md hover:bg-[#915EFF33] transition-all duration-300 flex items-center gap-2 mt-4 lg:mt-8"
              >
                <span>{t("hero.cv_button")}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    toggle ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {toggle && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-[#1d1836]/90 border border-[#915EFF] rounded-xl z-10 min-w-[160px] shadow-2xl backdrop-blur-lg">
                  <ul className="list-none flex flex-col">
                    <li
                      className="hover:bg-[#915EFF1A] rounded-lg transition-colors"
                      onClick={() => setToggle(false)}
                    >
                      <a
                        href={cvEs}
                        download="Joan_Velasquez_HV_ES.pdf"
                        className="block w-full px-4 py-2 text-white hover:text-[#915EFF] font-medium"
                      >
                        {t("hero.cv_spanish")}
                      </a>
                    </li>
                    <li
                      className="hover:bg-[#915EFF1A] rounded-lg transition-colors"
                      onClick={() => setToggle(false)}
                    >
                      <a
                        href={cvEn}
                        download="Joan_Velasquez_CV_EN.pdf"
                        className="block w-full px-4 py-2 text-white hover:text-[#915EFF] font-medium"
                      >
                        {t("hero.cv_english")}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t("hero.subtitle")}<br className="sm:block hidden" />
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-0 hero-canvas-wrapper pointer-events-none">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
