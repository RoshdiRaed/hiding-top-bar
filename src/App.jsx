import { useState } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import ScrollableContent from "./components/ScrollableContent";
import TestComponent from "./components/TestComponent";

const App = () => {
  const [topBarOpen, setTopBarOpen] = useState(true);

  const handleClickTopBar = () => {
    setTopBarOpen(!topBarOpen);
  };

  return (
    <div>
      <TopBar isOpen={topBarOpen} onClick={handleClickTopBar} />
      <ScrollableContent isOpen={topBarOpen}>
        <Navbar />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
        <TestComponent />
      </ScrollableContent>
    </div>
  );
};

export default App;
