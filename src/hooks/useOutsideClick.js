import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  //true as 2nd param because event need to be added after it goes down the dom tree
  // not up, see how react works behind the scenes, oterwise the modal doesn't open
  // cause its been added and closed immeditaly
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        //if click happens outside the element
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
