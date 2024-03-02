import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AllCams from '../components/AllCams'
import HomeButton from '../components/HomeButton'

const Cams = () => {

    return(
        <div>
            <Header />

            <AllCams />

            <HomeButton />

            <Footer />
        </div>
    )

}

export default Cams;