import { Divider, Input } from 'antd';
function Search(props) {
    const handleSearchChange=(event)=> {
        console.log(event.target.value)
        props.setSearchInput(event.target.value)
    }
  return (
    <>
    <Divider>Search</Divider>

    <label>Search</label>
    <Input value={props.searchInput} type="text" onChange={handleSearchChange} />
  </>
);
  
}

export default Search