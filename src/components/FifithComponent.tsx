@@ .. @@
   useEffect(() => {
     const handleScroll = () => {
       if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
         return;
 
+      // Get ForthComponent element to find its bottom
+      const forthComp = document.querySelector('[data-component="forth"]');
+      if (!forthComp) return;
+
+      const forthRect = forthComp.getBoundingClientRect();
+      const forthBottomAbs = window.scrollY + forthRect.bottom;
+
       const rect = svgContainerRef.current.getBoundingClientRect();
-      const scrollStart = rect.top + window.scrollY - window.innerHeight;
-      const scrollEnd = rect.bottom + window.scrollY;
+      const scrollStart = forthBottomAbs - 50;
+      const scrollEnd = rect.bottom + window.scrollY - window.innerHeight * 0.2;
 
       const progress =
         (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
       const clamped = Math.max(0, Math.min(1, progress));
 
       const point = pathRef.current.getPointAtLength(pathLength * clamped);
       circleRef.current.setAttribute("cx", point.x);
       circleRef.current.setAttribute("cy", point.y);
+      
+      // Show/hide circle based on progress
+      circleRef.current.style.opacity = clamped > 0 && clamped < 1 ? "1" : "0";
     };
 
     window.addEventListener("scroll", handleScroll);
+    handleScroll(); // Initialize position
     return () => window.removeEventListener("scroll", handleScroll);
   }, [pathLength]);