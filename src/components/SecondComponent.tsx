@@ .. @@
   useEffect(() => {
     const handleScroll = () => {
       if (svgRef.current && circleRef.current && pathRef.current) {
         const svgElement = svgRef.current;
         const circleElement = circleRef.current;
         const pathElement = pathRef.current;
 
-        // Get the bounding box of the SVG element
         const svgRect = svgElement.getBoundingClientRect();
-
-        // Calculate scroll progress within the SVG's visible area
-        // This makes the animation start when the SVG enters the viewport
-        // and finish when it leaves. You can adjust these values.
-        const scrollStart = svgRect.top + window.scrollY - window.innerHeight; // When SVG top aligns with bottom of viewport
-        const scrollEnd = svgRect.bottom + window.scrollY; // When SVG bottom aligns with top of viewport
+        const scrollStart = svgRect.top + window.scrollY - window.innerHeight * 0.8;
+        const scrollEnd = svgRect.bottom + window.scrollY - window.innerHeight * 0.2;
 
         const scrollProgress =
           (window.scrollY - scrollStart) / (scrollEnd - scrollStart);
 
-        // Clamp the progress between 0 and 1
         const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
 
-        // Calculate the point along the path
         const point = pathElement.getPointAtLength(
           pathLength * clampedProgress
         );
 
-        // Update circle position
         circleElement.setAttribute("cx", point.x);
         circleElement.setAttribute("cy", point.y);
+        
+        // Show/hide circle based on progress
+        circleElement.style.opacity = clampedProgress > 0 && clampedProgress < 1 ? "1" : "0";
       }
     };
 
-    // Add scroll event listener
     window.addEventListener("scroll", handleScroll);
+    handleScroll(); // Initialize position
 
-    // Clean up event listener on component unmount
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, [pathLength]); // Re-run effect if pathLength changes