#Replit Version
function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  console.log(names[randomPersonPosition] + " is going to buy lunch today!");
}
whosPaying(["RAHUL", "RAJ", "RAVI", "RAJESH"]);

#Udemy Version
function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    return (names[randomPersonPosition]+ " is going to buy lunch today!");
    
}
whosPaying(names);
