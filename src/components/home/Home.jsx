import React from "react";
import {useHistory} from 'react-router-dom';

const Home = () => {

    let history = useHistory();

    function handleClick() {
        history.push('/questions/1')
    }

    return (
        <section>
            <button onClick={handleClick}>Commencer le Quiz</button>
        </section>
    )
}

export default Home;
