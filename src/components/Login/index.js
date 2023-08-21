import "./index.css"

const Login = props =>{
    const {onclickLogin} = props

    return(
        <button type= "button" onClick = {onclickLogin} className = "btn">Login</button>
    )
}
export default Login