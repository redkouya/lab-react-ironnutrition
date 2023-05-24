import { Divider, Input, Layout } from 'antd';
function Search(props) {
  const handleSearchChange = (event) =>  props.setSearchInput(event.target.value);
    const styleLayout={
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"auto"
    }


  return (
    <>
      <Layout style={styleLayout}>
        <Divider>Search</Divider>

        <Input
            box="small"
          value={props.searchInput}
          type="text"
          onChange={handleSearchChange}
        />
      </Layout>
    </>
  );
}

export default Search;
