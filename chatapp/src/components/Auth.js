import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import "../styles/Auth.css"
const cookies = new Cookies();


export const Auth = (props) => {
    const { setIsAuth } = props;
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (error) {
            console.error(error);
        }
       

    };

    return <div className="auth">
        <h1>
            Sign In With <span className='googleG'>G</span><span className='googleO'>O</span><span className='googleO2'>O</span><span className='googleG'>G</span><span className='googleL'>L</span><span className='googleE'>E</span> to Continue
        </h1>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
}