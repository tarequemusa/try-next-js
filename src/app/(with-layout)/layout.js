import NavBar from '@/components/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
            <footer>Copyright &copy;</footer>
        </div>
    );
};

export default WithLayout;