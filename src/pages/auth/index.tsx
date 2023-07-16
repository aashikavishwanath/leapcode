import AuthModel from '@/components/Models/AuthModel';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

type AuthPageProps = {
    
};

const index:React.FC<AuthPageProps> = () => {
    
    return <div className="bg-gradient-to-b from-red-200 to-blue-200 h-screen relative">
        <div className="max-w-7xl mx-auto"> {/* constrains width of navbar */}
            <Navbar />
            <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
                <img src="/front.png" alt="front image" className="w-3/4"/>
            </div>
            <AuthModel />
        </div>
    </div>
}
export default index;