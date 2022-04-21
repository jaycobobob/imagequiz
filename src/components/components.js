import Navbar from "./misc/navbar";
import FlowerDisplay from "./flowers/flowerDisplay";
import Quiz from "./quiz/quiz";
import Login from "./users/login";
import Register from "./users/register";

let components = {
    FlowerDisplay: FlowerDisplay,
    Quiz: Quiz,
    users: {
        Login: Login,
        Register: Register,
    },
    misc: {
        Navbar: Navbar,
    },
};

export default components;
