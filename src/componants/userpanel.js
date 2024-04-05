import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import "./userpanel.css";


const UserPanel = () => {
    let navigate = useNavigate();

    const navigateToUserFront = () => {
        navigate('/userfront');
    }

    return (
        <div className="container">
            <div className="form">
                <div>
                    <FaUser />
                    <input type="text" placeholder="Name" />
                </div>
                <div>
                    <FaEnvelope />
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <FaLock />
                    <input type="password" placeholder="Password" />
                </div>
                <button onClick={navigateToUserFront}>Login</button>
            </div>
        </div>
    );
};

export default UserPanel;
