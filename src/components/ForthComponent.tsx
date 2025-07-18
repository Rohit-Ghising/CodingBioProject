@@ .. @@
   useEffect(() => {
     const handleScroll = () => {
       if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
         return;
 
       const thirdComp = document.getElementById("thirdComponent");
       if (!thirdComp) return;
 
       const thirdRect = thirdComp.getBoundingClientRect();
       const thirdBottomAbs = window.scrollY + thirdRect.bottom;
 
       const scrollY = window.scrollY;
 
       if (scrollY < thirdBottomAbs - 100) {
         const startPoint = pathRef.current.getPointAtLength(0);
         circleRef.current.setAttribute("cx", startPoint.x);
         circleRef.current.setAttribute("cy", startPoint.y);
         circleRef.current.style.opacity = "0";
         return;
       }
 
       const svgRect = svgContainerRef.current.getBoundingClientRect();
       const scrollStart = thirdBottomAbs - 100;
       const scrollEnd = svgRect.bottom + window.scrollY - window.innerHeight * 0.2;
 
       const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
       const clamped = Math.max(0, Math.min(1, progress));
 
       const point = pathRef.current.getPointAtLength(pathLength * clamped);
       circleRef.current.setAttribute("cx", point.x);
       circleRef.current.setAttribute("cy", point.y);
       
       // Show/hide circle based on progress
       circleRef.current.style.opacity = clamped > 0 && clamped < 1 ? "1" : "0";
     };
 
     window.addEventListener("scroll", handleScroll);
     handleScroll(); // Initialize position
     return () => window.removeEventListener("scroll", handleScroll);
   }, [pathLength]);