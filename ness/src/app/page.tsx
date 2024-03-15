"use client";
import { useEffect } from "react";

export default function Home() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return <></>;
}
