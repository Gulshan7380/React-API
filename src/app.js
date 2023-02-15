import React, {useState} from 'react';
import { getUserDetails } from './users/User';
import SearchInput from './component/SearchInput';
import UserCard from './component/UserCard';


const App = () => {
  const [searchText, setSearchText] = useState('');
  const [userDetails, setUserDetails] = useState (null);
  
  const updateSearchText = (text) => {
    setSearchText(text);
  };

  const handleSubmit = async () => {
    console.log ('submited success');
    const result = await getUserDetails(searchText);
    console.log(result);
    if (result.login) { 
      setUserDetails(result);
    }else {
      setUserDetails(null);
    }
  };

  return (
    <div>
      <SearchInput onUpdateSearchText={updateSearchText}  onHandleSubmit={handleSubmit} />
      { userDetails?.login? <UserCard user={userDetails}/>:<>No User Found!</>}
      
    </div>
  );
};


export default App;