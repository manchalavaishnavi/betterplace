import React, { useRef } from "react";
import UserInformation from './UserInformation'
import './usersmap.css'
function UsersDetails(props){
    const users=props.users
    console.log(users)
    return(
        <div >
            <ul className='mapdiv'>
            {users.map((user, id) => (
          <UserInformation 
          name={users[id].name.title +" " +users[id].name.first +" " +users[id].name.last}
          thumbnail={users[id].picture.thumbnail}
          gender={users[id].gender}
          email={users[id].email}
          phone={users[id].phone}
          nationality={users[id].location.country}
          />
        ))}

      </ul>
        </div>
    )
}

export default UsersDetails