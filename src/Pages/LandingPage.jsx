    import React from 'react'
    import Hero from '../Components/Hero';
    import Footer from '../Components/Footer';
    import bg from '../Components/bg.png'
import Header from '../Components/Header';
import '../index.css'
    const LandingPage = () => {
       
        return (
            <div className="bg-cover bg-center h-screen object-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1617107374365-442a6876ed0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
                <Header/>
                <Hero/>
                <Footer className='mt-auto'/>
            </div>
            
            );
    }

    export default LandingPage
