// Home.tsx
import React from "react";
import { useRouter } from "./RouterContext";

const About: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div>
      About page
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default About;
