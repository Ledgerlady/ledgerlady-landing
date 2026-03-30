"use client";

import Image, { type StaticImageData } from "next/image";
import {
  type KeyboardEventHandler,
  type WheelEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type GalleryItem = {
  src: string | StaticImageData;
  alt: string;
  caption?: string;
};

type AnimatedGalleryCarouselProps = {
  items: GalleryItem[];
};

const MAX_OFFSET = 2;

const transformForOffset = (offset: number) => {
  switch (offset) {
    case 0:
      return {
        transform:
          "translate3d(-50%, -50%, 180px) scale(1) rotateY(0deg) rotateZ(0deg)",
        opacity: 1,
        zIndex: 50,
        filter: "saturate(1)",
      };
    case -1:
      return {
        transform:
          "translate3d(calc(-50% - 290px), -48%, 60px) scale(0.9) rotateY(34deg) rotateZ(-1.5deg)",
        opacity: 0.92,
        zIndex: 40,
        filter: "saturate(0.95)",
      };
    case 1:
      return {
        transform:
          "translate3d(calc(-50% + 290px), -48%, 60px) scale(0.9) rotateY(-34deg) rotateZ(1.5deg)",
        opacity: 0.92,
        zIndex: 40,
        filter: "saturate(0.95)",
      };
    case -2:
      return {
        transform:
          "translate3d(calc(-50% - 500px), -46%, -40px) scale(0.74) rotateY(42deg) rotateZ(-3deg)",
        opacity: 0.42,
        zIndex: 30,
        filter: "saturate(0.8)",
      };
    case 2:
      return {
        transform:
          "translate3d(calc(-50% + 500px), -46%, -40px) scale(0.74) rotateY(-42deg) rotateZ(3deg)",
        opacity: 0.42,
        zIndex: 30,
        filter: "saturate(0.8)",
      };
    default:
      return {
        transform: "translate3d(-50%, -50%, -120px) scale(0.65)",
        opacity: 0,
        zIndex: 10,
        filter: "saturate(0.75)",
      };
  }
};

const getRelativeOffset = (index: number, activeIndex: number, total: number) => {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  }

  if (offset < -total / 2) {
    offset += total;
  }

  return offset;
};

export default function AnimatedGalleryCarousel({
  items,
}: AnimatedGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const wheelDeltaRef = useRef(0);
  const lastWheelTriggerRef = useRef(0);

  const moveToNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const moveToPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const pauseAutoplayTemporarily = () => {
    setPaused(true);

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
      pauseTimeoutRef.current = null;
    }, 2200);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current !== null) {
        window.clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (items.length <= 1 || paused || prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [items.length, paused, prefersReducedMotion]);

  const displayItem = items[hoveredIndex ?? activeIndex];

  const handleWheel: WheelEventHandler<HTMLDivElement> = (event) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      return;
    }

    event.preventDefault();
    wheelDeltaRef.current += event.deltaX;

    const now = Date.now();

    if (now - lastWheelTriggerRef.current < 320) {
      return;
    }

    if (Math.abs(wheelDeltaRef.current) < 36) {
      return;
    }

    if (wheelDeltaRef.current > 0) {
      moveToNext();
    } else {
      moveToPrevious();
    }

    lastWheelTriggerRef.current = now;
    wheelDeltaRef.current = 0;
    pauseAutoplayTemporarily();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToNext();
      pauseAutoplayTemporarily();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToPrevious();
      pauseAutoplayTemporarily();
    }
  };

  const desktopCards = useMemo(
    () =>
      items.map((item, index) => {
        const offset = getRelativeOffset(index, activeIndex, items.length);
        const isVisible = Math.abs(offset) <= MAX_OFFSET;
        const motion = transformForOffset(offset);

        return {
          item,
          index,
          isVisible,
          motion,
        };
      }),
    [activeIndex, items]
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <div className="hidden md:block">
        <div
          className="gallery-carousel-stage relative h-[520px] overflow-hidden"
          tabIndex={0}
          onWheel={handleWheel}
          onKeyDown={handleKeyDown}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="absolute inset-x-0 top-1/2 h-[320px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,239,255,0.18),rgba(96,239,255,0)_70%)] blur-3xl" />
          {desktopCards.map(({ item, index, isVisible, motion }) => (
            <button
              key={`${item.alt}-${index}`}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() =>
                setHoveredIndex((current) => (current === index ? null : current))
              }
              onFocus={() => setHoveredIndex(index)}
              onBlur={() =>
                setHoveredIndex((current) => (current === index ? null : current))
              }
              onClick={() => {
                setActiveIndex(index);
                pauseAutoplayTemporarily();
              }}
              className="gallery-carousel-card absolute left-1/2 top-1/2 w-[300px] lg:w-[360px]"
              style={{
                transform: motion.transform,
                opacity: motion.opacity,
                zIndex: motion.zIndex,
                filter: motion.filter,
                pointerEvents: isVisible ? "auto" : "none",
              }}
              data-hovered={hoveredIndex === index ? "true" : "false"}
            >
              <div className="overflow-hidden rounded-[30px] border border-[#E8EEF7] bg-white p-3 shadow-[0_22px_80px_rgba(13,37,62,0.14)]">
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={900}
                    className="h-[360px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                  {item.caption && (
                    <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                      <p className="text-sm font-medium leading-6 text-white/90">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-deepBlue">
              In Motion
            </p>
            <p className="mt-3 text-base leading-7 text-[#596780]">
              {displayItem.caption ?? displayItem.alt}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={`${item.alt}-indicator`}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "w-10 bg-gradient-to-r from-lightBlue to-deepBlue"
                    : "w-2.5 bg-[#c8d9f2]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {items.map((item, index) => (
            <article
              key={`${item.alt}-${index}`}
              className="surface-card min-w-[86%] snap-center p-3"
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="h-[320px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                {item.caption && (
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-sm font-medium leading-6 text-white/90">
                      {item.caption}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
