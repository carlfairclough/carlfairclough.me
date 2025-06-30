"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

interface Project {
  name: string;
  href: string;
  period: string;
  coverImage: string;
  hoverImages?: string[];
  comingSoon?: boolean;
}

const featuredProjects: Project[] = [
  {
    name: "Factory.fm",
    href: "/projects/factory-fm",
    period: "2024-2025",
    coverImage: "/projects/factory-fm/cover-factory.png",
    hoverImages: [
      "/projects/factory-fm/search-m-1.png",
      "/projects/factory-fm/search-m-2.png",
      "/projects/factory-fm/search-m-3.png",
      "/projects/factory-fm/search-m-4.png",
      "/projects/factory-fm/log-m-1.png",
      "/projects/factory-fm/log-m-2.png",
      "/projects/factory-fm/log-m-3.png",
      "/projects/factory-fm/release-m-1.png",
      "/projects/factory-fm/release-m-2.png",
      "/projects/factory-fm/profile-n-1.png",
      "/projects/factory-fm/search-n-1.png",
      "/projects/factory-fm/log-n-1.png",
      "/projects/factory-fm/factory-n-cards-comments.png",
      "/projects/factory-fm/factory-n-cards-logs.png",
      "/projects/factory-fm/factory-n-cards-release.png",
    ],
  },
  {
    name: "Ethereum.org",
    href: "/projects/ethereum-org",
    period: "2020",
    coverImage: "/projects/ethereum/cover-ethereum.png",
    hoverImages: [
      "/projects/ethereum/ethereum-redesign-homepage.png",
      "/projects/ethereum/ethereum-redesign-developers.png",
      "/projects/ethereum/ethereum-redesign-individuals.png",
      "/projects/ethereum/ethereum-redesign-eth.png",
      "/projects/ethereum/pageview-stats-1.png",
      "/projects/ethereum/pageview stats-2.png",
    ],
  },
  {
    name: "Status",
    href: "/projects/status",
    period: "2021-2022",
    coverImage: "/projects/status/cover-status.png",
    comingSoon: true,
  },
  {
    name: "Disco",
    href: "/projects/disco",
    period: "2022-2023",
    coverImage: "/projects/disco/cover-disco.png",
    comingSoon: true,
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentHoverImage, setCurrentHoverImage] = useState<{
    [key: number]: number;
  }>({});

  const handleEndScroll = () => {
    if (!containerRef.current) return;

    // Snap to nearest item after drag ends
    const container = containerRef.current;
    const itemWidth = 600 + 16; // max-width + gap
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / itemWidth);
    const clampedIndex = Math.max(
      0,
      Math.min(newIndex, featuredProjects.length - 1)
    );

    // setCurrentIndex(clampedIndex);
    container.scrollTo({
      left: clampedIndex * itemWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (hoveredProject !== null) {
      const project = featuredProjects[hoveredProject];
      if (project.hoverImages && project.hoverImages.length > 0) {
        interval = setInterval(() => {
          setCurrentHoverImage((prev) => ({
            ...prev,
            [hoveredProject]:
              ((prev[hoveredProject] || 0) + 1) % project.hoverImages!.length,
          }));
        }, 150); // Rapid switching every 150ms
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hoveredProject]);

  const getCurrentImage = (project: Project, index: number) => {
    if (
      hoveredProject === index &&
      project.hoverImages &&
      project.hoverImages.length > 0
    ) {
      const imageIndex = currentHoverImage[index] || 0;
      return project.hoverImages[imageIndex];
    }
    return project.coverImage;
  };

  return (
    <ScrollContainer
      className="flex gap-4 pb-4 px-[4vw] my-[6vh] overflow-x-hidden"
      innerRef={containerRef}
      onStartScroll={() => setIsDragging(true)}
      onEndScroll={() => {
        setIsDragging(false);
        setTimeout(handleEndScroll, 100);
      }}
    >
      {featuredProjects.map((project, index) => (
        <div key={index} className="w-full max-w-[600px] min-w-[240px]">
          {project.comingSoon ? (
            <div
              className="flex-shrink-0 block cursor-default opacity-75"
              style={{ maxWidth: "600px" }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCurrentHoverImage((prev) => ({ ...prev, [index]: 0 }));
              }}
            >
              <div className="relative w-full aspect-video rounded-2xl border border-slate-200 overflow-hidden">
                <img
                  src={getCurrentImage(project, index)}
                  alt={`${project.name} cover`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="soon-tag">Soon</div>
              </div>
            </div>
          ) : (
            <Link
              href={project.href}
              className="flex-shrink-0 hover:bg-gray-50 transition-colors block cursor-pointer"
              style={{ maxWidth: "600px" }}
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                }
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => {
                setHoveredProject(null);
                setCurrentHoverImage((prev) => ({ ...prev, [index]: 0 }));
              }}
            >
              <div className="relative w-full aspect-video rounded-2xl border border-slate-200 overflow-hidden cursor-pointe">
                <img
                  src={getCurrentImage(project, index)}
                  alt={`${project.name} cover`}
                  className="w-full h-full object-cover cursor-pointe"
                  draggable={false}
                />
              </div>
            </Link>
          )}
          <div className="px-4 py-2 text-base md:text-xl lg:flex w-full justify-between">
            <h3 className="font-normal">{project.name}</h3>
            <span className="opacity-70">{project.period}</span>
          </div>
        </div>
      ))}
    </ScrollContainer>
  );
}
