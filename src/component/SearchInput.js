

const SearchInput = (props) => {

  const handleSubmit = () =>{
    event.preventDefault();
    props.onHandleSubmit();
  }

  const handleChange = (event) =>{
      console.log(event);
      props.onUpdateSearchText(event.target.value);
  }

  return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Enter Search Text: <input type="text" onChange={handleChange} /></label>
                <button type="summit">Search for User </button>
            </form>
        </>
  );
};

export default SearchInput;