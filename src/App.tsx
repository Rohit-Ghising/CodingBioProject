@@ .. @@
 export default function App() {
   return (
     <div>
       <FirstComponent />
-      <div data-component="second">
+      <div data-component="second" className="component-section">
         <SecondComponent />
       </div>
-      <ThirdComponent />
-      <div data-component="forth">
+      <div className="component-section">
+        <ThirdComponent />
+      </div>
+      <div data-component="forth" className="component-section">
         <ForthComponent />
       </div>
-      <div data-component="fifth">
+      <div data-component="fifth" className="component-section">
         <FifithComponent />
       </div>
-      <SixthComponent />
-      <div data-component="seventh">
+      <div className="component-section">
+        <SixthComponent />
+      </div>
+      <div data-component="seventh" className="component-section">
         <SeventhComponent />
       </div>
-      <div data-component="eighth">
+      <div data-component="eighth" className="component-section">
         <LineComponent />
       </div>
-      <TextComponent />
-      <div data-component="curve">
+      <div className="component-section">
+        <TextComponent />
+      </div>
+      <div data-component="curve" className="component-section">
         <CurveAbove />
       </div>
-      <div data-component="nine">
+      <div data-component="nine" className="component-section">
         <NineComponent />
       </div>
-      <LastLine />
+      <div className="component-section">
+        <LastLine />
+      </div>
 
       <BioTeamComponent />
       <PositionComponent />