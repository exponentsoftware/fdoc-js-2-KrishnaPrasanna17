const users = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
    },
    {
      name: 'John',
      scores: 85,
      skills: ['HTM'],
      age: 25
    },
    {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
    }
  ];

console.log("\n\n");
function addUser(users, newuser) {
  let count = 0
  for (let each of users) {
    if (each.name == newuser.name) {
      count++
      return "User already exists"
    }
  }
  if (count == 0) {
    users.push(newuser)
    return users
  }

}
const newuser = {
  name: 'Prasanna',
  scores: 93,
  skills: ['HTML', 'CSS', 'JS'],
  age: 21
}
console.log(addUser(users, newuser))