@@ .. @@
   useEffect(() => {
     const handleScroll = () => {
       if (!circleRef.current || !pathRef.current || !containerRef.current)
         return;
 
+      // Get CurveBelowAbobe component element to find its bottom
+      const curveComp = document.querySelector('[data-component="curve"]');
+      if (!curveComp) return;
+
+      const curveRect = curveComp.getBoundingClientRect();
+      const curveBottomAbs = window.scrollY + curveRect.bottom;
+
       const containerRect = containerRef.current.getBoundingClientRect();
-      const scrollY = window.scrollY;
-      const containerTop = containerRect.top + scrollY;
       const containerHeight = containerRect.height;
       const viewportHeight = window.innerHeight;
 
-      const scrollProgress = Math.min(
-        Math.max(
-          (scrollY + viewportHeight - containerTop) /
-            (viewportHeight + containerHeight),
-          0
-        ),
-        1
-      );
+      const scrollStart = curveBottomAbs - 50;
+      const scrollEnd = containerRect.bottom + window.scrollY - viewportHeight * 0.2;
+      
+      const scrollProgress = Math.max(0, Math.min(1, 
+        (window.scrollY - scrollStart) / (scrollEnd - scrollStart)
+      ));
 
       const pathLength = pathRef.current.getTotalLength();
-      const pathProgress = Math.min(scrollProgress * 1.5, 1);
+      const pathProgress = Math.min(scrollProgress, 1);
       const point = pathRef.current.getPointAtLength(pathProgress * pathLength);
 
       circleRef.current.style.transform = `translate(calc(${point.x}px - 50%), calc(${point.y}px - 50%))`;
-      circleRef.current.style.opacity = scrollProgress > 0 ? "1" : "0";
+      circleRef.current.style.opacity = scrollProgress > 0 && scrollProgress < 1 ? "1" : "0";
     };
 
     window.addEventListener("scroll", handleScroll);
-    handleScroll();
+    handleScroll(); // Initialize position
 
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);