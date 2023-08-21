
import "./index.css"

const Logout = props =>{
    const {onclickLogout} = props

    return(
        <button type= "button" onClick = {onclickLogout}>Logout</button>
    )
}
export default Logout 


