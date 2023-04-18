const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// create a reference to the players array
const team = players;

// create a copy of the players array
const team1 = players.slice();

// create a copy of the person object
const cap1 = {...person};
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
