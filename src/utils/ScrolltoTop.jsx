import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToTopGSAP() {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to(window, {
      duration: 1,   
      scrollTo: { y: 0 },
      ease: "power2.out"  
    });
  }, [pathname]);

  return null; 
}
