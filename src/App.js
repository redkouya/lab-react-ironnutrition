import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm.jsx'

function App() {
  const [allFoods, setFood] = useState(foods);
  return (
    <div className="App">
    <AddFoodForm/>
      {allFoods.map((eachFood,index) => {
        return (
          <FoodBox key={index}
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
