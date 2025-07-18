@@ .. @@
 export default function ThirdComponent() {
   const pathRef = useRef(null);
   const circleRef = useRef(null);
   const svgContainerRef = useRef(null);
   const [pathLength, setPathLength] = useState(0);
 
   useEffect(() => {
     if (pathRef.current) {
       setPathLength(pathRef.current.getTotalLength());
     }
   }, []);
 
   useEffect(() => {
     const handleScroll = () => {
       if (!pathRef.current || !circleRef.current || !svgContainerRef.current)
         return;
 
+      // Get SecondComponent element to find its bottom
+      const secondComp = document.querySelector('[data-component="second"]');
+      if (!secondComp) return;
+
+      const secondRect = secondComp.getBoundingClientRect();
+      const secondBottomAbs = window.scrollY + secondRect.bottom;
+
       const rect = svgContainerRef.current.getBoundingClientRect();
-      const scrollStart = rect.top + window.scrollY - window.innerHeight;
-      const scrollEnd = rect.bottom + window.scrollY;
+      const scrollStart = secondBottomAbs - 50; // Start animation 50px before SecondComponent ends
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
 
   return (
-    <div className="w-full mt-0 pb-0">
+    <div className="w-full mt-0 pb-0" id="thirdComponent">
       <div
         className="w-10/12 mx-auto gap-8 mt-16 p-2 pb-0"
         ref={svgContainerRef}
       >