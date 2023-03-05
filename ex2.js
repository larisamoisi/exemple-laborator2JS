// let a = [11, "hello", true];
// let b = a.length;
// let c = a[0];
// a[0] = 13;
// a[1] = 15;
// alert(b);
// alert(c);
// alert(a);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");
// document.write(fruits);

// let pets = ["Caine", "Pisica", "Papagal", "Tigru"];
// document.write("Tabloul initial: "+pets+"<br/>");
// pets.push("Iguana");
// document.write("Tabloul obtinut: "+pets+"<br/>");
// pets.push("Pesti" , "Iepure");
// document.write("Tabloul obtinut: "+pets+"<br/>");
// document.write("Tabloul final are "+pets.length+" elemente");

// const myGirls = ["Lisa", "Mary"];
// const myBoys = ["Emil", "Robert", "John"];
// const myChildren = myGirls.concat(myBoys);
// document.write(myChildren );

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);
if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
alert(text);