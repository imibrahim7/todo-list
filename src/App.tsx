import "./App.css"
import Todo from "./components/Todo"
import Header from "./components/Header"
const App = () => {

  return (
    <>
      <div className="root">
        <Header/>
        <Todo/>

      </div>
    </>
  )
}

export default App