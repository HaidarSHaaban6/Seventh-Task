// First Task

function MaxOrMin(x, y, z) {
  let max = Math.max(x, y, z);
  let min = Math.min(x, y, z);
  console.log(`Output :`);
  console.log(`Max Element ${max}`);
  console.log(`Min Element ${min}`);
}

let first = document.getElementById("first_num");
let second = document.getElementById("second_num");
let third = document.getElementById("third_num");
let max_value = document.getElementById("max_value");
let min_value = document.getElementById("min_value");
let btn = document.getElementById("btn");
var x, y, z;

first.onkeyup = function () {
  return first.value;
};
second.onkeyup = function () {
  return second.value;
};
third.onkeyup = function () {
  return third.value;
};
btn.onclick = function () {
  min_value.value = Math.min(
    first.onkeyup(),
    second.onkeyup(),
    third.onkeyup()
  );
  max_value.value = Math.max(
    first.onkeyup(),
    second.onkeyup(),
    third.onkeyup()
  );
};

// Second Task

function TestChar(chr) {
  switch (chr) {
    case "a": {
      console.log(`Output: vowel`);
      break;
    }
    case "e": {
      console.log(`Output: vowel`);
      break;
    }
    case "l": {
      console.log(`Output: vowel`);
      break;
    }
    case "o": {
      console.log(`Output: vowel`);
      break;
    }
    case "u": {
      console.log(`Output: vowel`);
      break;
    }
    default: {
      console.log(`Output: Consonant`);
    }
  }
}

let content = document.getElementById("content");
let TestCharValue = document.getElementById("TestCharValue");
let btn2 = document.getElementById("btn2");

content.onkeyup = function () {
  // console.log(content.value);
  return content.value;
};
btn2.onclick = function () {
  switch (content.onkeyup()) {
    case "a": {
      TestCharValue.value = "vowel";
      break;
    }
    case "e": {
      TestCharValue.value = "vowel";
      break;
    }
    case "l": {
      TestCharValue.value = "vowel";
      break;
    }
    case "o": {
      TestCharValue.value = "vowel";
      break;
    }
    case "u": {
      TestCharValue.value = "vowel";
      break;
    }
    default: {
      TestCharValue.value = "Consonant";
    }
  }
};

// Third Task

function MultiplicationTable(n) {
  let s = 0;
  for (let i = 0; i < 12; i++) {
    console.log("Output:", n + s);
    s += n;
  }
}
// MultiplicationTable(5);

let NumsOfMultiplication = document.getElementById("NumsOfMultiplication");
let TextingArea = document.getElementById("TextingArea");
let btn3 = document.getElementById("btn3");

NumsOfMultiplication.onkeyup = function () {
  return NumsOfMultiplication.value;
};
btn3.onclick = function () {
  let n = Number(NumsOfMultiplication.onkeyup());
  let arr = [];
  let s = 0;
  for (let i = 0; i < 12; i++) {
    arr[i] = Number(s + n);
    s = Number(s + n);
  }
  // console.log(arr);
  TextingArea.value = arr.join(" - ");
};

// Fourth Task

function PrintingEvenNums(n2) {
  if (n2 % 2 == 1) {
    for (let i = n2; i >= 1; i -= 2) {
      console.log(i);
    }
  } else {
    for (let i = n2 - 1; i >= 1; i -= 2) {
      console.log(i);
    }
  }
}
// PrintingEvenNums(20);

let NumForCalcEvenVal = document.getElementById("NumForCalcEvenVal");
let EvenValContent = document.getElementById("EvenValContent");
let btn4 = document.getElementById("btn4");

NumForCalcEvenVal.onkeyup = function () {
  return NumForCalcEvenVal.value;
};
btn4.onclick = function () {
  n3 = Number(NumForCalcEvenVal.onkeyup());
  let arr2 = [];
  let z = 0;
  if (n3 % 2 == 1) {
    for (let i = n3; i >= 1; i -= 2) {
      arr2[i + z] = i;
      z++;
    }
  } else {
    for (let i = n3 - 1; i >= 1; i -= 2) {
      arr2[i + z] = i;
      z++;
    }
  }

  // This Loop Brings The Elements From The End Of The Array To The Beginning

  arr2Length = arr2.length - 1;
  for (let m = 0; m < arr2Length; m++) {
    arr2[m] = arr2[arr2Length - m];
  }

  // This Loop Deletes The Duplication Of Values

  let arr3 = [];
  for (let y = 0; y < NumForCalcEvenVal.onkeyup() / 2; y++) {
    arr3[y] = arr2[y];
  }
  EvenValContent.value = arr3.join(" - ");
};

// Fifth Task
function marks(...subs) {
  let result = 0;
  let avg = 0;
  let percentage = 0;
  for (let i = 0; i < subs.length; i++) {
    result += subs[i];
    avg = result / subs.length;
    percentage = avg;
  }
  console.log("Total Marks:", result);
  console.log("Average Marks:", avg);
  console.log("Percentage Marks:", percentage);
}

let Sub1 = document.getElementById("Sub1");
let Sub2 = document.getElementById("Sub2");
let Sub3 = document.getElementById("Sub3");
let Sub4 = document.getElementById("Sub4");
let Sub5 = document.getElementById("Sub5");
let Total = document.getElementById("Total");
let Average = document.getElementById("Average");
let Percentage = document.getElementById("Percentage");
let btn5 = document.getElementById("btn5");

Sub1.onkeyup = function () {
  return Sub1.value;
};
Sub2.onkeyup = function () {
  return Sub2.value;
};
Sub3.onkeyup = function () {
  return Sub3.value;
};
Sub4.onkeyup = function () {
  return Sub4.value;
};
Sub5.onkeyup = function () {
  return Sub5.value;
};
btn5.onclick = function () {
  let result =
    Number(Sub1.onkeyup()) +
    Number(Sub2.onkeyup()) +
    Number(Sub3.onkeyup()) +
    Number(Sub4.onkeyup()) +
    Number(Sub5.onkeyup());
  let avg = result / 5;
  let percentage = avg;
  Total.value = result;
  Average.value = avg;
  Percentage.value = percentage;
};

// Sixth Task

function Grade(...subbs) {
  let result2 = 0;
  let avg2 = 0;
  for (let i = 0; i < subbs.length; i++) {
    result2 += subbs[i];
    avg2 = result2 / subbs.length;
  }
  console.log("Your Percentage:", avg2);
  if (avg2 >= 90) {
    console.log("Grad A");
  } else if (avg2 >= 80) {
    console.log("Grad B");
  } else if (avg2 >= 70) {
    console.log("Grad C");
  } else if (avg2 >= 60) {
    console.log("Grad D");
  } else if (avg2 >= 40) {
    console.log("Grad E");
  } else if (avg2 < 40) {
    console.log("Grad F");
  }
}
// Grade(100, 100, 90, 100, 70);

let Sub6 = document.getElementById("Sub6");
let Sub7 = document.getElementById("Sub7");
let Sub8 = document.getElementById("Sub8");
let Sub9 = document.getElementById("Sub9");
let Sub10 = document.getElementById("Sub10");
let grade = document.getElementById("grade");
let btn6 = document.getElementById("btn6");

Sub6.onkeyup = function () {
  return Sub6.value;
};
Sub7.onkeyup = function () {
  return Sub7.value;
};
Sub8.onkeyup = function () {
  return Sub8.value;
};
Sub9.onkeyup = function () {
  return Sub9.value;
};
Sub10.onkeyup = function () {
  return Sub10.value;
};
btn6.onclick = function () {
  let result =
    Number(Sub6.onkeyup()) +
    Number(Sub7.onkeyup()) +
    Number(Sub8.onkeyup()) +
    Number(Sub9.onkeyup()) +
    Number(Sub10.onkeyup());
  let avg = result / 5;
  let gradee;
  if (avg >= 90) {
    gradee = "Grad A";
  } else if (avg >= 80) {
    gradee = "Grad B";
  } else if (avg >= 70) {
    gradee = "Grad C";
  } else if (avg >= 60) {
    gradee = "Grad D";
  } else if (avg >= 40) {
    gradee = "Grad E";
  } else if (avg < 40) {
    gradee = "Grad F";
  }
  grade.value = gradee;
};

let hamburgerbtn = document.getElementById("hamburgerbtn");
console.log(hamburgerbtn);
let unorderlist = document.getElementById("unorderlist");

hamburgerbtn.onclick = function () {
  unorderlist.classList.toggle("noneForUl");
};
