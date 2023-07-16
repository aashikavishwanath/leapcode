import React from 'react';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    return <form className="space-y-6 px-6 py-4">
        <h3 className="text-xl font-mono text-white">Sign in to LeapCode</h3>
        <div>
            <label htmlFor='email' className=''></label>
        </div>
    </form>
}
export default Login;