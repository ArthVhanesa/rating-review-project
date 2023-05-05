import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/navbar";
import ReviewBox from "./components/review_box_button";
import SelectDropDown from "./components/dropdown";
import ShowReview from "./components/show_review";

function App() {
  const [selected, setSelected] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <NavigationBar />
      <div style={{ margin: 30 }}>
        <ReviewBox
          items={items}
          setItems={setItems}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <div style={{ margin: 30 }}>
        <SelectDropDown selected={selected} setSelected={setSelected} />
        <ShowReview items={items} setItems={setItems} selected={selected} />
      </div>
    </div>
  );
}

export default App;
