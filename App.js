import React, { useState } from "react";
import { NativeBaseProvider } from "native-base";
import LoginPage from './components/LoginPage';
import Table from "./components/Table";

export default function App() {
  // Initialize userData state variable
  const [userData, setUserData] = useState([]);

  // Define function to update userData
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <NativeBaseProvider>
      <LoginPage updateUserData={updateUserData} />
      <Table data={userData} />
    </NativeBaseProvider>
  );
}
