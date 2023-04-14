import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const List = lazy(() => import("./pages/list"));
const Form = lazy(() => import("./pages/form"));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route path={`/form`} element={<Form />} />
          <Route path="/list" element={<List />} />
          <Route path="/*" element={<List />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
export default App;

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
