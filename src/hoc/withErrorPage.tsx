import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import Header from "../components/Header.tsx";



export const ErrorPageWrapper = <P extends object>(WrappedComponent: ComponentType<P>) => (props: P) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }

    }, [heroId])
    return ( <>
        <Header heroId={heroId}/>
        {characters[heroId] ? <WrappedComponent {...props} heroId ={heroId}/> : <ErrorPage/>}
</>  )}