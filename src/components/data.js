export const flowers = [
  {
    name: "Acacia",
    picture: "https://habahram.blob.core.windows.net/flowers/acacia.jpg",
  },
  {
    name: "Alyssum",
    picture: "https://habahram.blob.core.windows.net/flowers/alyssum.jpg",
  },
  {
    name: "Amaryllis",
    picture: "https://habahram.blob.core.windows.net/flowers/amaryllis.jpg",
  },
  {
    name: "Aster",
    picture: "https://habahram.blob.core.windows.net/flowers/aster.jpg",
  },
  {
    name: "Azalea",
    picture: "https://habahram.blob.core.windows.net/flowers/azalea.jpg",
  },
  {
    name: "Begonia",
    picture: "https://habahram.blob.core.windows.net/flowers/begonia.jpg",
  },
  {
    name: "Buttercup",
    picture: "https://habahram.blob.core.windows.net/flowers/buttercup.jpg",
  },
  {
    name: "Calluna",
    picture: "https://habahram.blob.core.windows.net/flowers/calluna.jpg",
  },
  {
    name: "Camellia",
    picture: "https://habahram.blob.core.windows.net/flowers/camellia.jpg",
  },
  {
    name: "Cardinal",
    picture: "https://habahram.blob.core.windows.net/flowers/cardinal.jpg",
  },
  {
    name: "Carnation",
    picture: "https://habahram.blob.core.windows.net/flowers/carnation.jpg",
  },
  {
    name: "Clover",
    picture: "https://habahram.blob.core.windows.net/flowers/clover.jpg",
  },
  {
    name: "Crown Imperial",
    picture: "https://habahram.blob.core.windows.net/flowers/crownimperial.jpg",
  },
  {
    name: "Daffodil",
    picture: "https://habahram.blob.core.windows.net/flowers/daffodil.jpg",
  },
  {
    name: "Dahlia",
    picture: "https://habahram.blob.core.windows.net/flowers/dahlia.jpg",
  },
  {
    name: "Daisy",
    picture: "https://habahram.blob.core.windows.net/flowers/daisy.jpg",
  },
  {
    name: "Gladiolus",
    picture: "https://habahram.blob.core.windows.net/flowers/gladiolus.jpg",
  },
  {
    name: "Lantana",
    picture: "https://habahram.blob.core.windows.net/flowers/lantana.jpg",
  },
  {
    name: "Lily",
    picture: "https://habahram.blob.core.windows.net/flowers/lily.jpg",
  },
  {
    name: "Lotus",
    picture: "https://habahram.blob.core.windows.net/flowers/lotus.jpg",
  },
  {
    name: "Marigold",
    picture: "https://habahram.blob.core.windows.net/flowers/Marigold.jpg",
  },
  {
    name: "Orchid",
    picture: "https://habahram.blob.core.windows.net/flowers/orchid.jpg",
  },
  {
    name: "Primrose",
    picture: "https://habahram.blob.core.windows.net/flowers/primrose.jpg",
  },
  {
    name: "Sunflower",
    picture: "https://habahram.blob.core.windows.net/flowers/sunflower.jpg",
  },
  {
    name: "Tickseed",
    picture: "https://habahram.blob.core.windows.net/flowers/tickseed.jpg",
  },
  {
    name: "Tulip",
    picture: "https://habahram.blob.core.windows.net/flowers/tulip.jpg",
  },
  {
    name: "Zinnia",
    picture: "https://habahram.blob.core.windows.net/flowers/zinnia.jpg",
  },
];

let generateQuestions = () => {
  let questions = [];
  let choiceIndex = 0;
  for (let i = 0; i < flowers.length; i++) {
    choiceIndex = i;
    if (choiceIndex > flowers.length - 4) {
      choiceIndex = i - 2;
    }
    let question = {
      picture: flowers[i].picture,
      choices: [
        flowers[choiceIndex].name,
        flowers[choiceIndex + 1].name,
        flowers[choiceIndex + 2].name,
      ],
      answer: flowers[i].name,
    };
    questions.push(question);
  }
  return questions;
};

let generateQuizzes = () => {
  let quizzes = {};
  let questionIndex = 0;
  let questions = generateQuestions();
  for (let i = 0; i < questions.length; i++) {
    questionIndex = i;
    if (questionIndex > questions.length - 7) {
      questionIndex = i - 5;
    }
    let quizQuestions = [
      questions[questionIndex],
      questions[questionIndex + 1],
      questions[questionIndex + 2],
      questions[questionIndex + 3],
      questions[questionIndex + 4],
      questions[questionIndex + 5],
    ];
    let quiz = { id: i, name: flowers[i].name, questions: quizQuestions };
    quizzes[flowers[i].name] = quiz;
  }
  return quizzes;
};

export const quizzes = generateQuizzes();
