import components from "../components/components";
import { useParams } from "react-router-dom";

const QuizPage = (props) => {
    let { flowerName } = useParams();
    return (
        <div>
            <components.misc.Navbar />
            <div className="p-4">
                <components.Quiz flowerName={flowerName} />
            </div>
        </div>
    );
};

export default QuizPage;
