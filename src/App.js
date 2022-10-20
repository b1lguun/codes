import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";



function App() {
  const [input, setInput] = useState("");
  const [change, setChange] = useState([]);
  const [search, setSearch] = useState("");

  function newElement() {
    setChange([...change, input]);
  }

  const deleteTodo = (value) => {
    console.log(value);
    const newChange = change.filter((e) => e !== value);
    setChange(newChange);
  };
  function Button(props) {
    return (
      <button onClick={() => deleteTodo(props.ustgahutga)} className="button">
        {props.value}
      </button>
    );
  }
  return (
    <div className="App">
      <div className="aa">
        <p className="se">Search:</p>
        <div className="s">
          <input
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="S">
        <h1 className="h">To Do List</h1>
        <div className="g">
          <input
            className="j"
            type="text"
            placeholder="type something..."
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => newElement()} className="button">
            Add
          </button>

          <div>
            {change.map((e) =>
              search.length ? (
                e.startsWith(search) && (
                  <div>
                    <input className="j" value={e} />

                    <Button ustgahutga={e} value="delete" />
                  </div>
                )
              ) : (
                <div>
                  <input className="j" value={e} />

                  <Button ustgahutga={e} value="delete" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
