import React from "react";
import SearchComponent from "./components/SearchComponent/SearchComponent";
import EventList, { Event } from "./data/EventList";
import RegistrationModal from "./components/RegistrationModal/RegistrationModal";

const App: React.FC = () => {
  return (
    <div>
      <h1>Engx</h1>
      <SearchComponent items={EventList} />
      {/* <RegistrationModal /> */}
    </div>
  );
};

export default App;
