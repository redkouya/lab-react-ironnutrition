import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [allFoods, setFood] = useState(foods);
  return (
    <div className="App">
      {allFoods.map((eachFood) => {
        return (
          <FoodBox
            food={{
              name: eachFood.name,
              calories: eachFood.calories,
              image: eachFood.image,
              servings: eachFood.servings,
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
