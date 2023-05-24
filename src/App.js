import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm.jsx';
import Search from './components/Search.jsx';
import { Row, Divider, Button } from 'antd';
function App() {
  const [allFood, setFood] = useState(foods);  

  const [searchInput,setSearchInput] = useState("")
  
  const createFood = (createdFood) =>   setFood([createdFood, ...allFood])
  
  return (
    <div className="App">
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <AddFoodForm createFood={createFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFood.filter((eachFood)=> eachFood.name.includes(searchInput)).map((eachFood, index) => {
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
      </Row>
    </div>
  );
}

export default App;
