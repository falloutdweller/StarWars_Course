import Navigation from "./Navigation.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

interface Props {
    heroId: string;
}


const Header = ({heroId}:Props) => {

    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }

    }, [heroId])

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{characters[heroId] ? characters[heroId].name : "Error"} </h1>
        </header>
    );
};

export default (Header);