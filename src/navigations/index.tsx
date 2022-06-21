import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./drawer.navigation";
import { useAuth } from "../hook/auth";
import LoginNavigation from "./login.navigation";

export default function Navigation() {
  const { access_token } = useAuth();
  return (
    <NavigationContainer>
        {access_token ? <DrawerNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
}
