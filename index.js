//*  DESTRUCTURING (OBJECT)

//1Object Destructure
const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//(Classical)
// const name1 = car.name
// const model1 = car["model"]
// console.log(name1)

//Destructuring
// const { name, model, colors } = car //? destructre
// console.log(name, model)

let { engine: motor } = car; //? isim degisikligi bu sekilde yapilablir
console.log(motor);
motor = 2.0;
console.log(motor, car);

car.engine = 2.2;
console.log(car);

//2Nested objectlerde Destructure
//Örnek1
// const {
//   car1: { name, engine },
//   car2: { model },
// } = cars

// const model2 = cars.car1.model
// console.log(model2)

//3 (Json formatında Destructure)
//Örnek
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//* Classical
team.forEach((t, i) => {
  console.log(i + 1 + ".NAME:", t.name);
  console.log("SURNAME:", t.surname);
  console.log("JOB:", t.job);
  console.log("AGE:", t.age);
  console.log("*************");
});

//* destructre
team.forEach((person, i) => {
  const { name, surname, job, age } = person;
  console.log(i + 1 + ".NAME:", name);
  console.log("SURNAME:", surname);
  console.log("JOB:", job);
  console.log("AGE:", age);
  console.log("*************");
});

//4functionun dondurdugu objede destructure

const getInfo = () => {
  return {
    id: new Date().getTime(),
    productName: "MacBook",
    price: 50000,
  };
};
console.log(getInfo());

const { productName, price } = getInfo();
console.log("PrICE:", price);

const calculate = ({ price, name }) => {
  console.log("NAME:", name);
  console.log("PRICE:", price * 1.2);
};

calculate({ price: 50000, name: "macbook" });

//5yolda destructure

// const check = ({ a, b, c }) => { //? yolda destr.
//   console.log(a, b, c)
// }

const check = (data) => {
  const { a, b, c } = data; //? icerde destr
  console.log(a, b, c);
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};

check(data);
