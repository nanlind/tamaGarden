import React from "react";
import "./App.css";
import { DogIcon } from "./components/DogIcon";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }: { signOut?: any }) {
  console.log(signOut);
  return (
    <View className="App">
      <header className="App-header">
        <h1> Liu's Hage {"<3 <3 <3"} </h1>
        <DogIcon size={250} />
      </header>
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
