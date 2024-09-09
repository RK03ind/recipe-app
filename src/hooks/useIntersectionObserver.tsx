import { useEffect, useRef } from "react";

type UseIntersectionObserverProps = {
  onIntersect: () => void;
  options?: IntersectionObserverInit;
};

const useIntersectionObserver = ({
  onIntersect,
  options,
}: UseIntersectionObserverProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        console.log("Intersection Observer Hit!");
        onIntersect();
      }
    }, options);

    const currentElement = elementRef.current;
    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [onIntersect, options]);

  return elementRef;
};

export default useIntersectionObserver;
