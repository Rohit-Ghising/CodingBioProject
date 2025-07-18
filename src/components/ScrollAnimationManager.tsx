import { useEffect, useRef } from 'react';

interface PathElement {
  pathRef: React.RefObject<SVGPathElement>;
  circleRef: React.RefObject<SVGCircleElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  componentName: string;
}

class ScrollAnimationManager {
  private static instance: ScrollAnimationManager;
  private pathElements: PathElement[] = [];
  private totalPathLength = 0;
  private pathLengths: number[] = [];
  private cumulativeLengths: number[] = [];

  static getInstance(): ScrollAnimationManager {
    if (!ScrollAnimationManager.instance) {
      ScrollAnimationManager.instance = new ScrollAnimationManager();
    }
    return ScrollAnimationManager.instance;
  }

  registerPath(element: PathElement) {
    this.pathElements.push(element);
    this.calculatePathLengths();
  }

  private calculatePathLengths() {
    this.pathLengths = [];
    this.cumulativeLengths = [];
    this.totalPathLength = 0;

    this.pathElements.forEach((element, index) => {
      if (element.pathRef.current) {
        const length = element.pathRef.current.getTotalLength();
        this.pathLengths.push(length);
        this.totalPathLength += length;
        this.cumulativeLengths.push(this.totalPathLength);
      }
    });
  }

  startAnimation() {
    const handleScroll = () => {
      if (this.pathElements.length === 0) return;

      // Get the overall scroll progress across all components
      const firstContainer = this.pathElements[0]?.containerRef.current;
      const lastContainer = this.pathElements[this.pathElements.length - 1]?.containerRef.current;
      
      if (!firstContainer || !lastContainer) return;

      const firstRect = firstContainer.getBoundingClientRect();
      const lastRect = lastContainer.getBoundingClientRect();
      
      const scrollStart = firstRect.top + window.scrollY - window.innerHeight * 0.8;
      const scrollEnd = lastRect.bottom + window.scrollY - window.innerHeight * 0.2;
      
      const overallProgress = Math.max(0, Math.min(1, 
        (window.scrollY - scrollStart) / (scrollEnd - scrollStart)
      ));

      // Calculate which path segment we're on and the local progress
      const targetDistance = overallProgress * this.totalPathLength;
      
      let currentPathIndex = 0;
      let localProgress = 0;
      
      for (let i = 0; i < this.cumulativeLengths.length; i++) {
        if (targetDistance <= this.cumulativeLengths[i]) {
          currentPathIndex = i;
          const startDistance = i > 0 ? this.cumulativeLengths[i - 1] : 0;
          localProgress = (targetDistance - startDistance) / this.pathLengths[i];
          break;
        }
      }

      // Hide all circles first
      this.pathElements.forEach((element) => {
        if (element.circleRef.current) {
          element.circleRef.current.style.opacity = '0';
        }
      });

      // Show and position the active circle
      const activeElement = this.pathElements[currentPathIndex];
      if (activeElement && activeElement.pathRef.current && activeElement.circleRef.current) {
        const point = activeElement.pathRef.current.getPointAtLength(
          localProgress * this.pathLengths[currentPathIndex]
        );
        
        activeElement.circleRef.current.setAttribute('cx', point.x.toString());
        activeElement.circleRef.current.setAttribute('cy', point.y.toString());
        activeElement.circleRef.current.style.opacity = overallProgress > 0 && overallProgress < 1 ? '1' : '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }
}

export const useScrollAnimation = (
  pathRef: React.RefObject<SVGPathElement>,
  circleRef: React.RefObject<SVGCircleElement>,
  containerRef: React.RefObject<HTMLDivElement>,
  componentName: string
) => {
  const managerRef = useRef<ScrollAnimationManager>();

  useEffect(() => {
    managerRef.current = ScrollAnimationManager.getInstance();
    
    if (pathRef.current && circleRef.current && containerRef.current) {
      managerRef.current.registerPath({
        pathRef,
        circleRef,
        containerRef,
        componentName
      });

      // Start animation after a short delay to ensure all components are registered
      const timer = setTimeout(() => {
        const cleanup = managerRef.current!.startAnimation();
        return cleanup;
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathRef, circleRef, containerRef, componentName]);
};