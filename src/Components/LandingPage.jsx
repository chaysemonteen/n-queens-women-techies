import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    const LandingPage = () => {
    
        return (
            <div className="bg-cover bg-center h-screen" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1617107374365-442a6876ed0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
        
                <Navbar/>
                <Hero/>
                <Footer/>   
            </div>
                
            );
    }

    export default LandingPage