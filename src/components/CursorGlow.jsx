import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return;

      glowRef.current.style.left = `${event.clientX}px`;
      glowRef.current.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
}

export default CursorGlow;