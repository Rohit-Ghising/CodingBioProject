@@ .. @@
 export default function App() {
   return (
     <div>
       <FirstComponent />
-      <SecondComponent />
+      <div data-component="second">
+        <SecondComponent />
+      </div>
       <ThirdComponent />
-      <ForthComponent />
-      <FifithComponent />
+      <div data-component="forth">
+        <ForthComponent />
+      </div>
+      <div data-component="fifth">
+        <FifithComponent />
+      </div>
       <SixthComponent />
-      <SeventhComponent />
-      <LineComponent />
+      <div data-component="seventh">
+        <SeventhComponent />
+      </div>
+      <div data-component="eighth">
+        <LineComponent />
+      </div>
       <TextComponent />
-      <CurveAbove />
-      <NineComponent />
+      <div data-component="curve">
+        <CurveAbove />
+      </div>
+      <div data-component="nine">
+        <NineComponent />
+      </div>
       <LastLine />
 
       <BioTeamComponent />