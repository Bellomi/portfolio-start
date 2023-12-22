// Import React and useRef
import { useState, useRef, useEffect } from "react";

// Define the props type
interface HoverCardProps {
  x?: number;
  y?: number;
  z?: number;
}

// Define the function type
type HoverCardFunction = (
  ref: React.RefObject<HTMLElement>,
  props: HoverCardProps
) => void;

// Define the function
export const hoverCard: HoverCardFunction = (ref, { x = 0, y = 0, z = 0 }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current || {
      offsetWidth: 0,
      offsetHeight: 0,
    };
    const { clientX, clientY } = e;

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const { current } = ref;

    if (current) {
      const handler = (e: MouseEvent) =>
        handleMouseMove(e as unknown as React.MouseEvent<HTMLElement>);
      current.addEventListener("mousemove", handler);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup the event listener when the component unmounts
      return () => {
        current.removeEventListener("mousemove", handler);
        current.addEventListener("mouseenter", handleMouseEnter);
        current.addEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "none" : "all 0.5s ease";

  return { transform, transition };
};
