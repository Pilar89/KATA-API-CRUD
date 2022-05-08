import React from "react";
import Form from "./ components/Form";
import Header from "./ components/Header";
import List from "./ components/List";
import { StoreProvider } from "./state/state";

function App() {
  return (
    <StoreProvider>
      <Header />
      <div className="container mt-5">
        <Form />

        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
