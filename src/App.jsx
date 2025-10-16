import React from "react";
import { Card } from "./Card";
import { Search } from "./Search";

const App = () => {
  return (
    <>
      <div className="grid m-10 justify-center">
        <Search />
        <Card />
      </div>
    </>
  );
};

export default App;
