import React from "react";
import LargeImage from './LargeImage'
import './userinfo.css'
function UserInformation(props){
    console.log(props.gender)
    return(
        <div className='card'>
        <div className='userbox'>
            <div><LargeImage  image={props.thumbnail}/></div>
            <div>
                <div className='userinf'>
                    <div className='userrow'>
                        <div className='detailpropname'>{props.name}</div>
                    </div>

                </div>
                <div className='userinf'>
                    <div className='userrow'>
                    <label className='detaillabel'>Gender:</label>
                    <div className='detailprop' >{props.gender}</div>
                    </div>

                </div>
                <div className='userinf'>
                    <div className='userrow'>
                    <label className='detaillabel'>Nationality:</label>
                    <div className='detailpropn' >{props.nationality}</div>
                    </div>

                </div>
                <div>
                    <div className='userinf'>
                        <div className='userrow'>
                        <label className='detaillabel'>Email:</label>
                    <div className='detailprope' >{props.email}</div>
                        </div>

                    </div>

                </div>
                <div className='userinf'>
                    <div className='userrow'>
                    <label className='detaillabel'>Phone No:</label>
                    <div className='detailpropp'   >{props.phone}</div>
                    </div>

                </div>
            </div>



        </div>
        </div>

    )
}
export default UserInformation