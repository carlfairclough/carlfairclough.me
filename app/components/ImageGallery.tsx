"use client";

import { useRef, useEffect, useState } from "react";
import Viewer from "viewerjs";
import "viewerjs/dist/viewer.css";
import "./viewer-overrides.css";
import ScrollContainer from "react-indiana-drag-scroll";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  caption?: string;
  className?: string;
  imageClassName?: string;
  maxHeight?: string;
}

export default function ImageGallery({
  images,
  caption,
  className = "",
  imageClassName = "",
  maxHeight = "24rem", // h-96 equivalent
}: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (galleryRef.current) {
      viewerRef.current = new Viewer(galleryRef.current, {
        inline: false,
        button: true,
        navbar: true,
        title: true,
        toolbar: {
          zoomIn: true,
          zoomOut: true,
          oneToOne: true,
          reset: true,
          prev: true,
          play: false,
          next: true,
          rotateLeft: true,
          rotateRight: true,
          flipHorizontal: true,
          flipVertical: true,
        },
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        backdrop: true,
        loading: true,
        loop: true,
      });
    }

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, []);

  const handleEndScroll = () => {
    if (!containerRef.current) return;

    // Snap to nearest image after drag ends
    const container = containerRef.current;
    const imageWidth = container.scrollWidth / images.length;
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / imageWidth);
    const clampedIndex = Math.max(0, Math.min(newIndex, images.length - 1));

    container.scrollTo({
      left: clampedIndex * imageWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={`px-[4vw] py-12 w-screen my-4 -mx-[4vw] ${className}`}>
      <ScrollContainer
        className="flex gap-4 cursor-grab overflow-x-hidden"
        innerRef={(ref) => {
          containerRef.current = ref as HTMLDivElement;
          galleryRef.current = ref as HTMLDivElement;
        }}
        onStartScroll={() => setIsDragging(true)}
        onEndScroll={() => {
          setIsDragging(false);
          setTimeout(handleEndScroll, 100);
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`border border-slate-200 rounded-2xl object-contain flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity ${imageClassName}`}
            style={{
              maxHeight,
              width: "auto",
            }}
            draggable={false}
            onClick={(e) => {
              if (isDragging) {
                e.preventDefault();
              }
            }}
          />
        ))}
      </ScrollContainer>
      {caption && (
        <p className="text-sm opacity-70 mt-4 text-gray-700">{caption}</p>
      )}
    </div>
  );
}
