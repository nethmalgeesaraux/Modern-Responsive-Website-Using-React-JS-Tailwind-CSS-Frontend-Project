import React, { useEffect, useRef, useState } from "react";

function AnimatedSection({ children, animationClass }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 } // 20% visible → trigger
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        visible ? animationClass : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
