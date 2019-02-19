function findTypes() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr[i] = typeof arguments[i];
  }
  return arr;
}

function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function mapArray(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]);
  }
  return newArr;
}

function filterArray(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function getAmountOfAdultPeople(data) {
  let filteredArray = filterArray(data, function(user) {
    return user.age > 18;
  });
  return filteredArray.length;
}

function getGreenAdultBananaLovers(data) {
  return mapArray(
    filterArray(data, function(el) {
      return (
        el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green"
      );
    }),
    function(el) {
      return el.name;
    }
  );
}

function keys(obj) {
  let newArrKeys = [];
  for (let i in obj) {
    newArrKeys.push(i);
  }
  return newArrKeys;
}

function values(obj) {
  let newArrKeys = [];
  for (let i in obj) {
    newArrKeys.push(obj[i]);
  }
  return newArrKeys;
}

function showFormattedDate(date) {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-us", { month: "short" });
  const day = date.getDate();

  return `Date: ${day} of ${month}, ${year}`;
}

function isEvenYear(date) {
  return date.getFullYear() % 2 === 0;
}

function isEvenMonth(date) {
  return (date.getMonth() + 1) % 2 === 0;
}

findTypes(null, 5, "hello");

executeforEach([1, 2, 3], function(el) {
  console.log(el);
});

mapArray([2, 5, 8], function(el) {
  return el + 3;
});

filterArray([2, 5, 8], function(el) {
  return el > 3;
});

getAmountOfAdultPeople(data);

getGreenAdultBananaLovers(data);

keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

showFormattedDate(new Date("2019-01-27T01:10:00"));

isEvenYear(new Date("2019-01-27T01:10:00"));

isEvenMonth(new Date("2019-02-27T01:10:00"));

const data = [
  {
    _id: "5b5e3168c6bf40f2c1235cd6",
    index: 0,
    age: 39,
    eyeColor: "green",
    name: "Stein",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e3168e328c0d72e4f27d8",
    index: 1,
    age: 38,
    eyeColor: "blue",
    name: "Cortez",
    favoriteFruit: "strawberry"
  },
  {
    _id: "5b5e3168cc79132b631c666a",
    index: 2,
    age: 2,
    eyeColor: "blue",
    name: "Suzette",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e31682093adcc6cd0dde5",
    index: 3,
    age: 19,
    eyeColor: "green",
    name: "George",
    favoriteFruit: "banana"
  }
];
