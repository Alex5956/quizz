import React, {useState, useEffect, Fragment} from "react";
import {Link, useParams} from "react-router-dom";

const Jeu = ({max}) => {

    const [quiz, setQuiz] = useState();
    const [isOk, setIsOk] = useState(null);
    let {quizId} = useParams();

    const [finish, setFinish] = useState(max + (quizId - 1))

    useEffect(() => {
        fetch(`http://vps.olprog.fr:666/quiz/${quizId}?user_id=2c3d20c3724ae`)
            .then(response => {
                response.json().then(r => {
                    setQuiz(r);
                })
            })
            .catch(() => {
                alert('Désolé un problème est survenu lors de la requête!');
            });
    }, [quizId])

    function handleClick(reponse) {
        if (reponse === quiz.reponse_correcte) {
            setIsOk(true);
        } else {
            setIsOk(false);
        }
    }

    return (
        <Fragment>
            {
                quiz &&
                <article>
                    <h1>{quiz.question}</h1>
                    <p className={'cat'}>{quiz.categorie}</p>
                    {
                        quiz.other_choices.length > 0 &&
                        quiz.other_choices.map(
                            (choix, index) => {
                                return <button
                                    key={index}
                                    onClick={() => handleClick(choix.name)}
                                    disabled={isOk === true || isOk === false}
                                    style={{textTransform: "uppercase"}}
                                >
                                    {choix.name}
                                </button>
                            }
                        )
                    }

                    {isOk &&
                    <p>Félicitations.</p>
                    }

                    {isOk !== null && !isOk &&
                    <p>Dommage. La réponse est : {quiz.reponse_correcte}</p>
                    }

                    {
                        quizId >= finish ?
                            <div>
                                <button><Link to={'/'}>Home</Link></button>
                            </div>
                            : <div>
                                <button>
                                    <Link to={'/questions/' + (+quizId + 1)}>
                                        Suivant
                                    </Link>
                                </button>
                            </div>
                    }
                </article>
            }
        </Fragment>
    )
};

export default Jeu;
