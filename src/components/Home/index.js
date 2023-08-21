
import {Component} from 'react' 
import Message from "../Message"
import Logout from "../Logout"
import Login from "../Login"
import "./index.css"
class Home extends Component{
    state = {isLogin: False}
        onClickBtn = ()=>{
            this.setState(prevState=>({
                isLogin: !prevState.isLogin
            }))
        }
    render(){
        const {isLogin} = this.state
        return(
            <div className= "bg-container">
                <div className= "home-container">
                    <Message isLogin = {isLogin}/>
                    {isLogin ? <Logout onclickLogout = {this.onClickBtn}/> : <Login onclickLogin = {this.onClickBtn}/>}
                </div>
            </div>
        )
    }
}
export default Home