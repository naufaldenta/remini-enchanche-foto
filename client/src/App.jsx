import Homepage from "./pages/Homepage";
import { HomepageProvider } from "./pages/Homepage/context";

const App = () => {
  return (
    <HomepageProvider>
      <Homepage />
    </HomepageProvider>
  );
};
export default App;
