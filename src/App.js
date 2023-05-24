import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm.jsx';

function App() {
  const [allFoods, setFood] = useState(foods);

  const createFood = (createdFood) => {
    console.log('CREATE FOOD', createdFood);

    setFood([createdFood,...allFoods])
  };
  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      {allFoods.map((eachFood, index) => {
        return (
          <FoodBox
            key={index}
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
