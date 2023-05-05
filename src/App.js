import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar';
import ReviewBox from './components/review_box_button';
import SelectDropDown from './components/dropdown';
import ShowReview from './components/show_review';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div style={{ margin: 30 }}>
        <SelectDropDown />
        <ShowReview />
      </div>
      <div style={{ margin: 30 }}>
        <ReviewBox />
      </div>
    </div>
  );
}

export default App;
