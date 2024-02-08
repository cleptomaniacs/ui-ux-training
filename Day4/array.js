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

Array.from("Tanzania").forEach((letter) => console.log(letter.toUpperCase()));

for (course of courses) {
  console.log(course.toUpperCase());
}

var entries = courses.entries();
for (entry of entries) {
  console.log(entry);
}
console.log("Entries: ", ...entries);

var keys = courses.keys();
console.log("Keys: ", ...keys);

var values = courses.values();
console.log("Values: ", ...values);
