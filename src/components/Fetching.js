import React, { useRef } from "react";
import UsersDetails from './UsersDetails'
import './fetch.css'
class Fetching extends React.Component{
    constructor(){
        super()
        this.state={
            ind:1,
            gender:'',
            nationality:'',
            results:'',
            users:[]
        }
    }
    componentDidUpdate(prevState, prevProps) {
        console.log("cdu");
        if (prevProps.gender !== this.state.gender || prevProps.results !== this.state.results || prevProps.nationality !== this.state.nationality ||
            prevProps.ind !== this.state.ind
        ) {
          this.fetchdata();
        }
      }
      fetchdata = () => {
        let url = `https://randomuser.me/api?page=${this.state.ind}&results=${this.state.results}&gender=${this.state.gender}&nat=${this.state.nationality}`;
        fetch(url)
          .then((res) => {
            //console.log(res);
            return res.json();
          })
          .then((users) => {
            this.setState({ users: users.results });
          });
      };
      handlegender=(e)=>{
          this.setState({gender:e.target.value})
      }
      handlenationality=(e)=>{
          this.setState({nationality:e.target.value})
      }
      handleresults=(e)=>{
          this.setState({results:e.target.value})
      }
      previousbutton=()=>{
          if (this.state.ind>1){
              var p=this.state.ind
              this.setState({ind:p-1})
          }
      }
      nextbutton=()=>{
          var n=this.state.ind
          this.setState({ind:n+1})
      }
    render(){
        console.log(this.state.users)
        return (
            <div className='allfetch' >
                <div className='motionfix'>
                <div className='buttonscss'>
                <button className='previouscolor' onClick={this.previousbutton}>previous </button>
                <button className='previouscolor' onClick={this.nextbutton}>next</button>
                </div>
                
                
                <div className='fetchbox'>
                <select value={this.state.gender} onChange={this.handlegender} className='fetchselect'>
                    <option >select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>

                </select>
                <select value={this.state.nationality} onChange={this.handlenationality} className='fetchselect'>
                    <option>select nationality</option>
                    <option value='AU'>Australia</option>
                    <option value='BR'>Brazil</option>
                    <option value='CA'>Canada</option>
                    <option value='FR'>France</option>
                    <option value='GB'>Great Britain</option>
                    <option value='US'>USA</option>
                </select>
                <select value={this.state.results} onChange={this.handleresults} className='fetchselect'>
                    <option>select results per page</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
                </div>
                </div>


                
                <UsersDetails users={this.state.users}  />
            </div>
        )
    }
}
export default Fetching