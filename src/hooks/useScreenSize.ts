import { useState, useEffect } from "react";

const getScreenSizeName = (width:number) => {
  if (width >= 1536) return "2xl";
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "default";
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSizeName(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSizeName(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;