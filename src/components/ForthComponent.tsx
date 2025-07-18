@@ .. @@
   useEffect(() => {
     const handleScroll = () => {
       if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
         return;
 
-      // Get ThirdComponent element to find bottom
       const thirdComp = document.getElementById("thirdComponent");
       if (!thirdComp) return;
 
       const thirdRect = thirdComp.getBoundingClientRect();
       const thirdBottomAbs = window.scrollY + thirdRect.bottom;
 
-      // Current scroll position
       const scrollY = window.scrollY;
 
-      if (scrollY < thirdBottomAbs) {
-        // BEFORE scrolling past ThirdComponent
-        // Keep circle at start of path
+      if (scrollY < thirdBottomAbs - 100) {
         const startPoint = pathRef.current.getPointAtLength(0);
         circleRef.current.setAttribute("cx", startPoint.x);
         circleRef.current.setAttribute("cy", startPoint.y);
-        return; // no animation yet
+        circleRef.current.style.opacity = "0";
+        return;
       }
 
-      // AFTER scrolling past ThirdComponent
       const svgRect = svgContainerRef.current.getBoundingClientRect();
-      const scrollStart = thirdBottomAbs; // start animation after thirdComponent bottom
-      const scrollEnd = svgRect.bottom + window.scrollY;
+      const scrollStart = thirdBottomAbs - 100;
+      const scrollEnd = svgRect.bottom + window.scrollY - window.innerHeight * 0.2;
 
-      // progress relative to scroll past ThirdComponent
       const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
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