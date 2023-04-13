import Header from "./components/Header";
import User from "./components/User/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Header />
      <User />
      <ToastContainer/>
    </div>
  );
}

export default App;
