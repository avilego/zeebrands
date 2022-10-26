import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContext } from "./service/searchContext";
import UserLayout from "./layouts/UserLayout";
import Home from "./screens/Home";
import Results from "./screens/Results";
import { ResultContext } from "./service/resultContext";

function App() {
  const [search, setSearch] = useState();
  const [result, setResult] = useState();

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ search, setSearch }}>
        <ResultContext.Provider value={{ result, setResult }}>
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path="search/user=:id" element={<Results />} />
            </Route>
          </Routes>
        </ResultContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
