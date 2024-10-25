import React, { useState, useEffect, useRef } from "react";

export type ShowOnScrollProps = {
  id?: string;
  children: React.ReactNode | React.ReactNode[];
  timing?: number;
  delay?: number;
  className?: string;
};

const ShowOnScroll = ({
  id,
  children,
  timing = 50,
  delay = 0,
  className = "",
}: ShowOnScrollProps) => {
  const [visibleChildren, setVisibleChildren] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Convert children to an array if it's not already an array
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in the viewport, set hasAppeared to true
        if (entry.isIntersecting) {
          setTimeout(() => {
            childrenArray.forEach((_, index) => {
              setTimeout(() => {
                setVisibleChildren((prev) => prev + 1);
              }, index * timing); // Delay each child by 1 second
            });
          }, delay);
        }
      },
      {
        threshold: 0.15, // Trigger when 10% of the element is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div {...(id ? { id } : {})} ref={elementRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={
            index < visibleChildren
              ? "transition ease-in-out duration-[1200ms]"
              : "opacity-0"
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ShowOnScroll;
