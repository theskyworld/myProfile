import { useEffect } from "react";

export function useOnScroll(selector : string, callback : () => void) {
  useEffect(() => {
    const headerElem = document.querySelector("header");
    document.onscroll = () => {
      headerElem?.classList.add("sticky");
    };
  }, []);
}