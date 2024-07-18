import About from "./components/About";
import Home from "./components/Home";
import Route from "./components/Route";
import { RouterProvider } from "./components/RouterContext";

const App = () => {
  return (
    <RouterProvider>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </RouterProvider>
  );
};

export default App;
