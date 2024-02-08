var courses = ["nodejs", "react", "mongodb"];
var newcourses = [...courses, "oracle", "mysql", "microservices"];
console.log(courses);
console.log("New courses: ", newcourses);

var names = new Array();
names = ["user1", "user2", "user3", "user4"];
console.log("Names: ", names);

var marks;

marks = [56, 65, 67, 78, 89];
console.log(marks);

var age = 30;
console.log(age);
var fun1 = () => {
  let score = 4;
  console.log(score);
  console.log("Function age: ", age);
};
console.log(age);
fun1();
