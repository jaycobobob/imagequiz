const api = {
    getFlowers: () => {
        return fetch("https://jaycobobob-imagequiz-api.herokuapp.com/flowers").then((res) =>
            res.json()
        );
    },
    getQuiz: (id) => {
        return fetch(`https://jaycobobob-imagequiz-api.herokuapp.com/quiz/${id}`).then((res) =>
            res.json()
        );
    },
    validateCredentials: (email, password) => {
        return fetch("https://jaycobobob-imagequiz-api.herokuapp.com/flowers", {
            method: "POST",
            body: {
                email: email,
                password: password,
            },
        }).then((res) => res.json());
    },
    addUser: (name, email, password) => {
        return fetch("https://jaycobobob-imagequiz-api.herokuapp.com/register", {
            method: "POST",
            body: {
                name: name,
                email: email,
                password: password,
            },
        }).then((res) => res.json());
    },
    saveScore: (quizTaker, quizName, score) => {
        return fetch("https://jaycobobob-imagequiz-api.herokuapp.com/score", {
            method: "POST",
            body: {
                quizTaker: quizTaker,
                quizName: quizName,
                score: score,
            },
        });
    },
};

export default api;
