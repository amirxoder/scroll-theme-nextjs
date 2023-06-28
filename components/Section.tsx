import { useScroll, useMotionValueEvent } from "framer-motion";
import React, { ReactNode, useRef } from "react";

const Section: React.FC<{
  children: ReactNode;
  theme: string;
  setTheme: ({ value: string }) => void;
}> = ({ children, theme, setTheme }) => {
  let container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change",(value) => {
    if(value > 0 && value < 1){
      setTheme(theme)
    }
  });
  return (
    <section
      ref={container}
      className="bg-white dark:bg-black p-8 min-h-screen flex flex-col"
    >
      {children}
    </section>
  );
};

export default Section;
