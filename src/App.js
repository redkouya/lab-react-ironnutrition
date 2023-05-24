import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm.jsx';
import Search from './components/Search.jsx';
import { Row, Divider, Button, Collapse } from 'antd';


function App() {
  
  const [allFood, setFood] = useState(foods);  
  const [isFormShowing,setIsFormShowing]=useState(false)

  const [searchInput,setSearchInput] = useState("")
  const handleCollapse =()=>{
    setIsFormShowing(!isFormShowing)
  }
  const createFood = (createdFood) =>   setFood([createdFood, ...allFood])
  const deleteFood = (index)=>{
    const cloneFoodArray=JSON.parse(JSON.stringify(allFood))
    cloneFoodArray.splice(index,1)
    setFood(cloneFoodArray)
  }
  
  return (
    <div className="App">
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <Collapse>
      <Collapse.Panel header={isFormShowing?"Ocultar Formulario":"Mostrar Formulario"} onClick={handleCollapse}>
      <AddFoodForm createFood={createFood} />
      </Collapse.Panel>
          
      </Collapse>
      

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {/* si no hay nada en la busqueda muestra imagen y mensaje y si hay hace el filtrado */}
        {
          
          allFood.filter((eachFood)=> eachFood.name.includes(searchInput)).length>0?allFood.filter((eachFood)=> eachFood.name.includes(searchInput)).map((eachFood, index) => {
          return (
            <FoodBox deleteFood={deleteFood} index={index}
              key={index}
              food={{
                name: eachFood.name,
                calories: eachFood.calories,
                image: eachFood.image,
                servings: eachFood.servings,
              }}
            />
          );
        }):<div>
        
       <h1>Oops! There is no content to show.</h1> 
        <img src="https://cdn-icons-png.flaticon.com/512/5115/5115327.png" alt="" />
        </div>
        }
      </Row>
    </div>
  );
}

export default App;
