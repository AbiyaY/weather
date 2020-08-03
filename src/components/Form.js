import React from 'react';

const Form = () => {
    return(
        <div>
           <form className="search-form " >
      <input 
        className="search-bar" 
        type = "text" 
        name =" country" 
        placeholder = "Country..." 
      />
      <button className ="btn" type="submit" >
                Search
      </button>
      </form>

        </div>
    );
}
        
    


export default Form;