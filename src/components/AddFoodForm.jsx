import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
   
  const [nameInput, setNameInput] = useState('');
  const [imgInput, setImgInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);
  const handleNameChange = (event) => setNameInput(event.target.value);
  const handleImgChange = (event) => setImgInput(event.target.value);
  const handleCaloriesChange = (event) => setCaloriesInput(event.target.value);
  const handleServingsInput = (event) => setServingsInput(event.target.value);

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    props.createFood({name:nameInput,image:imgInput,calories:caloriesInput,servings:servingsInput})

  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={nameInput} type="text" onChange={handleNameChange} />

          <label>Image</label>
          <Input value={imgInput} type="text" onChange={handleImgChange} />

          <label>Calories</label>
          <Input
            value={caloriesInput}
            type="Number"
            onChange={handleCaloriesChange}
          />

          <label>Servings</label>
          <Input
            value={servingsInput}
            type="Number"
            onChange={handleServingsInput}
          />

          <button type="submit" >Create</button>
        
      </form>
    </div>
  );
}

export default AddFoodForm;
