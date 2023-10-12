const questions = [
    {
      question: "What does CSS stand for?",
      answers: [
        {
          text: "Computer Style Sheets",
        },
        {
          text: "Creative Style Sheets",
        },
        {
          text: "Colorful Style Sheets",
        },
        { 
          text: "Cascading Style Sheets",
          isCorrect: true
        }
      ],
    },
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      answers: [
        {
          text: "In the <body> section",
        },
        {
          text: "At the end of the document",
        },
        {
          text: "You can't refer to an external style sheet",
        },
        {
          text: "In the <head> section",
          isCorrect: true
        },
      ],
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      answers: [
        {
          text: "<script>",
        },
        {
          text: "<headStyle>", 
        },
        {
          text: "<css>",
        },
        {
          text: "<style>",
          isCorrect: true
        }
      ],
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        {
          text: "class",
        },
        {
          text: "font",
        },
        {
          text: "styles",
        },
        {
          text: "style",
          isCorrect: true
        },
      ]
    },
    {
      question: "Which is the correct CSS syntax?",
      answers: [
        {
            text: "{body:color=black;}",
        },
        {
            text: "{body;color:black;}",
        },
        {
            text: "body:color=black;}",
        },
        {
            text: "body {color: black;}",
            isCorrect: true,
        },
      ]
    },
    {
      question: "How do you insert a comment in a CSS file?",
      answers: [
        {
            text: "' this is a comment",
        },
        {
            text: "// this is a comment",
        },
        {  
            text: "// this is a comment //",
        },
        {    
            text: "/* this is a comment */",
            isCorrect: true,
        }
      ],
    },
    {
      question: "Which property is used to change the background color?",
      answers: [
        {
            text: "color",
        },
        {    
            text: "bgcolor",
        },
        {
            text: "bgColor",
        },
        {
            text: "background-color",
            isCorrect: true
        }
      ],
    },
    {
      question: "How do you add a background color for all <h1> elements?",
      answers: [
        {
          text: "all.h1 {background-color:#FFFFFF;}",
        },
        {
          text: "h1.setAll {background-color:#FFFFFF;}",
        },
        {
          text: "h1.all {background-color:#FFFFFF;}",
        },
        {
          text: "h1 {background-color:#FFFFFF;}",
          isCorrect: true
        }
      ],
    },
  ];
  
  export default questions;
  