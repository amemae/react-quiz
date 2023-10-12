import Question from "./Question";
import Answer from "./Answer";
import questions from "../questions";

let questionList = [];
questions.forEach((currQuestion) => {
    questionList.push(currQuestion.question)
    currQuestion.answers.forEach((answer) => {
        questionList.push(answer.text)
    })
})

const Quiz = () => {
    return (
        <div>
            <div>Quiz</div>
            <ul>
                {questionList}
            </ul>
        </div>
    );
};

export default Quiz;