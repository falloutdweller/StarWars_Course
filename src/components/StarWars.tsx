import {starWarsInfo} from "../utils/constants.ts";
import {ErrorPageWrapper} from "../hoc/withErrorPage.tsx";

const StarWars = () => {

    return (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    )
};

export default ErrorPageWrapper(StarWars);