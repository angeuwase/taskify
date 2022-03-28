import UserInput from "./UserInput"
import './styles.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='site-header'>Taskify</h1>
            <UserInput />
        </div>
    )
}

export default Header