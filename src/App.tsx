import './App.css'
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";

function App() {

    const [hero, setHero] = useState(defaultHero);


    return (
        <SWContext.Provider value={{
            hero,changeHero:setHero
        }}>
            <Main/>
            <Footer/>
        </SWContext.Provider>
    )
}

export default App