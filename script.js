const topics = {
  basics: {
    title: "Java Basics",
    description: "Java is a popular, platform-independent programming language used for web, mobile, and desktop applications.",
    example: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, Java Beginner!");
  }
}`,
    quiz: {
      question: "Which method is the entry point in Java programs?",
      answer: "main"
    }
  },
  variables: {
    title: "Variables in Java",
    description: "Variables are used to store data values. You must declare them before using.",
    example: `public class Main {
  public static void main(String[] args) {
    int age = 25;
    System.out.println("Age: " + age);
  }
}`,
    quiz: {
      question: "Which keyword declares an integer variable?",
      answer: "int"
    }
  },
  ifelse: {
    title: "If-Else Statements",
    description: "Conditional statements execute code based on conditions.",
    example: `public class Main {
  public static void main(String[] args) {
    int number = 10;
    if (number > 5) {
      System.out.println("Number is greater than 5");
    } else {
      System.out.println("Number is less than or equal to 5");
    }
  }
}`,
    quiz: {
      question: "Which keyword is used for an alternate block after 'if'?",
      answer: "else"
    }
  },
  loops: {
    title: "Loops in Java",
    description: "Loops execute a block of code repeatedly until a condition is false.",
    example: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println("Count: " + i);
    }
  }
}`,
    quiz: {
      question: "Which loop runs a block of code as long as a condition is true?",
      answer: "while"
    }
  },
  arrays: {
    title: "Arrays in Java",
    description: "Arrays store multiple values in a single variable, instead of declaring separate variables for each value.",
    example: `public class Main {
  public static void main(String[] args) {
    int[] numbers = {1, 2, 3, 4, 5};
    System.out.println("First element: " + numbers[0]);
  }
}`,
    quiz: {
      question: "What is the index of the first element in an array?",
      answer: "0"
    }
  },
  methods: {
    title: "Methods in Java",
    description: "Methods are blocks of code that perform specific tasks. They make code reusable and organized.",
    example: `public class Main {
  static void greet() {
    System.out.println("Hello from a method!");
  }

  public static void main(String[] args) {
    greet();
  }
}`,
    quiz: {
      question: "Which keyword defines a method that belongs to a class rather than an instance?",
      answer: "static"
    }
  },
  oop: {
    title: "Object-Oriented Programming (OOP)",
    description: "OOP focuses on objects and classes. It uses principles like inheritance, encapsulation, and polymorphism.",
    example: `class Car {
  String brand = "Toyota";
  void start() {
    System.out.println("Car started!");
  }
}

public class Main {
  public static void main(String[] args) {
    Car myCar = new Car();
    System.out.println(myCar.brand);
    myCar.start();
  }
}`,
    quiz: {
      question: "What keyword is used to create an object from a class?",
      answer: "new"
    }
  }
};

const params = new URLSearchParams(window.location.search);
const topicKey = params.get("topic");
const topic = topics[topicKey];

if (topic) {
  document.getElementById("topic-title").textContent = topic.title;
  document.getElementById("topic-description").textContent = topic.description;
  document.getElementById("code").value = topic.example;
  document.getElementById("quiz-question").textContent = topic.quiz.question;

  document.getElementById("run-btn").addEventListener("click", () => {
    const code = document.getElementById("code").value;
    const iframe = document.getElementById("output").contentWindow.document;
    iframe.open();
    iframe.write(`<pre>${code}</pre>`);
    iframe.close();
  });

  document.getElementById("check-answer").addEventListener("click", () => {
    const userAns = document.getElementById("quiz-answer").value.trim().toLowerCase();
    const correct = topic.quiz.answer.toLowerCase();
    const result = document.getElementById("result");
    result.textContent = userAns === correct ? "✅ Correct!" : "❌ Try again.";
  });
}
