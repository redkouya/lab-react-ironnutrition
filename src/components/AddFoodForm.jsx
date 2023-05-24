import { Divider, Input,Layout } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
   
  const [nameInput, setNameInput] = useState('');
  const [imgInput, setImgInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);
  const handleNameChange = (event) => setNameInput(event.target.value);
  const handleImgChange = (event) => setImgInput(event.target.value);
  const handleCaloriesChange = (event) => setCaloriesInput(event.target.value);
  const handleServingsChange = (event) => setServingsInput(event.target.value);

  const handleOnSubmit =(event)=>{
    event.preventDefault()
    props.createFood({name:nameInput,image:imgInput,calories:caloriesInput,servings:servingsInput})
  }
  const styleLayout={
    width:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"auto"
}
  return (
    <div>
    <Layout style={styleLayout}>
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
            onChange={handleServingsChange}
          />

          <button type="submit" >Create</button>
        
      </form>
      </Layout>
    </div>
  );
}

export default AddFoodForm;
