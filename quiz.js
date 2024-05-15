body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.navbar {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.navbar-title {
  margin-left: 20px;
}

.navbar-btn {
  background-color: white;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.intro {
  text-align: center;
  margin-top: 50px;
}

.start-button {
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.start-button:hover {
  background-color: #333;
}

.quiz-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.question {
  text-align: center;
  margin-bottom: 20px;
}

.choices {
  display: flex;
  justify-content: space-between;
}

.choice-column {
  flex-basis: 45%;
}

.choice {
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
}

.choice:hover {
  background-color: #eee;
}

.next-question-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.next-question-btn:hover {
  background-color: #333;
}

.result-container {
  text-align: center;
  margin-top: 50px;
}

.result-text {
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #333;
}

