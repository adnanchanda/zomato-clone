import React from "react";
import { NativeBaseProvider, Text, Center } from "native-base";
import LoginPage from './components/LoginPage'

export default function App() {
  return (
    <NativeBaseProvider>
      <LoginPage />
    </NativeBaseProvider>
  );
}