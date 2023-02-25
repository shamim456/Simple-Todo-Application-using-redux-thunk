import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/TodoList";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        {/* navBar */}
        <NavBar></NavBar>
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          {/* <!-- header --> */}
          <Header></Header>
          <hr className="mt-4" />

          <TodoList></TodoList>

          <hr className="mt-4" />

          {/* <!-- footer --> */}
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
