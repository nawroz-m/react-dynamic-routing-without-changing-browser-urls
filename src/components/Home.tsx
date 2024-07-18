// Home.tsx
import React from "react";
import { useRouter } from "./RouterContext";

const Home: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div>
      Home page
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
};

export default Home;
