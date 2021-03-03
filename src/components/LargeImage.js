import React from "react";
import './image.css'
class LargeImage extends React.Component{
    constructor(props){
        super(props)
        this.state={large:false}
    }
    handlelarge=()=>{
        this.setState({large:! this.state.large})
        console.log('click')
    }

    render(){
        return(
            <div>
                <img src={this.props.image} alt='userinfo' onClick={this.handlelarge} className='largeimage'/>
                {this.state.large && 
                (<dialog className="image_dialog" style={{ position: "absolute" }} open onClick={this.handlelarge}>
                <img className="image_large" src={this.props.image} onClick={this.handlelarge}alt="large"/></dialog>)}
            </div>
            

        )
    }
}

export default LargeImage