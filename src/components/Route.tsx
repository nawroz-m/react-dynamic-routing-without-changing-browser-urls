import React from "react";
import { useRouter } from "./RouterContext";

interface RouteProps {
  path: string;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ path, component: Component }) => {
  const { currentRoute } = useRouter();
  return currentRoute === path ? <Component /> : null;
};

export default Route;
