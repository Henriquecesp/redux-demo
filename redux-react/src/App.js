import React from "react";
import "./App.css";
import UserContainer from "./components/UserContainer";

// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import BreadContainer from "./components/BreadContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <div className="App">
      {/* <CakeContainer />
      <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <BreadContainer />
      <NewCakeContainer /> */}
      <UserContainer />
    </div>
  );
}

export default App;
