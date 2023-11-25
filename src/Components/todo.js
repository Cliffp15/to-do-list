// import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const Todo = ({ Todoinfo }) => {
//   const imgURL = petinfo.photos[0]?.medium || "/path/to/placeholder-image.jpg";
  
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/component/${petinfo.id}`);
//   };

  
// function truncate(str){
//   return str.length > 15 ? str.substring(0, 10) + "..." : str;
// }

return (
    /*Change the data using the prop base don the information that 
        could change formt todo to todo. 
        Ex. Todo itselfs getValue, the Date, the TimeRanges, etc.
        (Get more ideea for information from other todo apps)*/
    <form className='new-task-input'>
        <input type='text' className='ntinput-section'
            placeholder='  Enter task' id='ntinput' name='ntinput'></input>
        <button className='create-new-task-button'> + Add Task</button>   
    </form>

    // <div className="pet-card">
    //     {/* <img className="pet-card_image-backdrop" src={imgURL} alt="No image available" /> */}
    //   <div className="pet-card__image" onClick={handleCardClick}>
    //     {/* <picture src={imgURL}></picture> */}
    //     <h3 className="See-Pet-Profile">See Profile</h3>
    //     <img src={imgURL} alt="No image available" />
    //   </div>
    //   <div className="pet-card__details">
    //     <h1 className="pet-card__name">{truncate(petinfo.name)}</h1>
    //     <h2 className="pet-card__breed">
    //       {petinfo.breeds.primary}, {petinfo.age}
    //     </h2>
    //     <h2 className="pet-card__gender">{petinfo.gender}</h2>
    //     <h2 className="pet-card__location">
    //       {petinfo.contact.address.city}, {petinfo.contact.address.state}
    //     </h2>
    //   </div>
    // </div>
);
};

export default Todo;
