type SearchProps = {
  loadUser: (userName: string) => Promise<void> //return a promise because loadUser using await
}

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

const Search = ({loadUser}: SearchProps) => {

  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log('enter');
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
        <h2>Search for an user:</h2>
        <p>Check out user's best repos</p>
        <div className={classes.search_container}>
          
            <input type="text" 
            placeholder="type user's name in here"
            onChange={(e)=> setUserName(e.target.value)}
            onKeyDown={handleKeyDown}/>

            <button 
              onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
    </div>
  )
}

export default Search