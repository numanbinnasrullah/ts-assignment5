// Name = Numan Nasrullah 
// Assignment No 5

// 1. Write a ts program to find maximum between two numbers.
function FindMaxBtwTwo(num1:number, num2:number){
    if(num1 > num2){
        return num1
    } else {
        return num2
    }
}
var receiveMaxBtwTwo = FindMaxBtwTwo(50, 10);
console.log(receiveMaxBtwTwo)


// 2. Write a ts program to find maximum between three numbers.
function FindMaxBtwThree(num1:number, num2:number, num3:number){
    if(num1 > num2 && num1 > num3){
        return num1
    } else if(num2 > num1 && num2 > num3){
        return num2
    }else {
        return num3
    }
}
var receiveMaxBtwThree = FindMaxBtwThree(50, 100, 30);
console.log(receiveMaxBtwThree)

// 3. Write a ts program to check whether a number is negative, positive or zero.
function CheckNumIsNegPos(numIsNegPos:number){
    if(numIsNegPos >= 0){
        console.log("Number is Posiive")
    }else{
        console.log("Number is Negative")
    }
}
CheckNumIsNegPos(-30)

// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
function ChechDivisible(num:number){
    if(num % 5 === 0 && num % 11 === 0){
        console.log("Number is Divisible by 5 And 11")
    }else if(num % 5 === 0){
        console.log("Number is Just Divisible By 5")
    }else if(num % 11 === 0){
        console.log("Number is Just Divisible By 11")
    }else{
        console.log("Number is Not Divisible For Both 5 And 11")
    }
}
ChechDivisible(44)

// 5. Write a ts program to check whether a number is even or odd.
function CheckNumIsEvenOdd(num:number){
    if(num % 2 === 0){
        console.log("Nmber is Even")
    } else {
        console.log("Number is Odd")
    }
}
CheckNumIsEvenOdd(35)

// 6. Write a ts program to check whether a year is leap year or not.
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2015);

// 7. Write a ts program to check whether a character is alphabet or not.
function CheckCharIsAlphaOrDigit(str:string){
    if(str >= "A" && str <= "Z" || str >= "a" && str <= "z"){
        console.log("Yes ...! Character is Alphabet:", str)
    }else {
        console.log("OOOPpsss ...! This is Not an Alphabet:", str)
    }
}
CheckCharIsAlphaOrDigit("e")

// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
function checkVowelOrCnstant(str:string){
    if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u"){
        console.log("Alphabet is Vowel:", str)
    } else {
        console.log("Alphabet is Constant:", str)
    }
}
checkVowelOrCnstant("z")

// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
function CheckAlphaDigitOrSpecialChar(str:string){
    if(str >= "A" && str <= "Z" || str >= "a" && str <= "z"){
        console.log("Character is Alphabet :", str)
    } else if(str >= "1" && str <= "9"){
        console.log("Character is a Digit :", str)
    }else {
        console.log("Character is Special Character :", str)
    }
}
CheckAlphaDigitOrSpecialChar("*")

// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
function chechCharUpperOrLower(str:string){
    if(str == str.toUpperCase()){
        console.log("UpperCase Character :", str)
    } else {
        console.log("LowerCase Character :", str)
    }
}
chechCharUpperOrLower("p")

// 11. Write a ts program to input week number and print week day.
function PrintWeekDay(WeekDay:number){
    switch(WeekDay){
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Fridat")
            break;
        case 6:
            console.log("Staurday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default :
            console.log("Please Enter Valid Week Day Number Which is Exactly Between 1 to 7")
    }
}
PrintWeekDay(6)

// 12. Write a ts program to input month number and print number of days in that month.
var getDaysInMonth = function(month:number,year:number) {
   return new Date(year, month, 0).getDate();
  };
  console.log(getDaysInMonth(2, 2016));

//   13. Write a ts program to 
  var note1000:number;
  var note500:number;
  var note100:number;
  var note50:number;
  var note20:number;
  var note10:number;
  var amount:number = Number(prompt("Enter amount"));
  if(amount >= 1000)
  {
      note1000 = amount/1000;
      amount -= note1000 * 1000;
      console.log("Note 1000 :", note1000)
  }
  if(amount >= 500)
  {
      note500 = amount/500;
      amount -= note500 * 500;
      console.log("Note 500 :", note500)
    }
  if(amount >= 100)
  {
      note100 = amount/100;
      amount -= note100 * 100;
      console.log("Note 100 :", note100)
  }
  if(amount >= 50)
  {
      note50 = amount/50;
      amount -= note50 * 50;
      console.log("Note 50 :", note50)
  }
  if(amount >= 20)
  {
      note20 = amount/20;
      amount -= note20 * 10;
      console.log("Note 20 :", note20)
  }
  if(amount >= 10)
  {
      note10 = amount/10;
      amount -= note10 * 10;
      console.log("Note 10 :", note10)
  }
  

// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
function CheckTriangleValid(side1:number, side2:number, side3:number){
    var sum = side1 + side2 + side3
    console.log(sum)
    if(sum === 180 && side1 > 0 && side2 > 0 && side3 > 0){
        console.log("Triangle is valid.")
    } else {
        console.log("Triangle is not valid.")
    }
}
CheckTriangleValid(70,60,50)

// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
function CheckTriangleWithSides(a:number, b:number, c:number){
    if(a + b <= c || a + c <= b || b + c <= a){
        console.log("Triangle is NOt Valid")
    } else {
        console.log("Triangle is Valid")
    }
}
CheckTriangleWithSides(5, 3, 4)


// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
function CheckThreeTriangle(side1:number, side2:number, side3:number){
    if(side1 == side2 && side2 == side3){
        console.log("This is an equilateral triangle")
    }else if(side1 == side2 || side1 == side3 || side2 == side3){
        console.log("This is an isosceles triangle")
    }
    else {
        console.log("This is a scalene triangle")
    }
}
CheckThreeTriangle(50, 70, 50)

// 17. Write a ts program to find all roots of a quadratic equation.
function FindRoots(a:number, b:number, c:number){
    let root1:number, root2:number;
let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
}
FindRoots(1,6,5)


// 18. Write a ts program to calculate profit or loss.
function ProphitLoss(salePrice:number, costPrice:number){
    var profit:number;
    var loss:number;
    if(salePrice>costPrice){
		profit=salePrice-costPrice;
        console.log("Profit :", profit)
	}else if(costPrice>salePrice){
	    loss = costPrice-salePrice;
	    console.log("Loss :", loss)
    }else{
	    console.log("No Loss , No Profit")
    }
}

ProphitLoss(300, 250)



// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. 
// Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var PhysicsMarks:number = Number(prompt("Enter Physics Marks"));
var CheistryMarks:number = Number(prompt("Enter Cheistry Marks"));
var MathMarks:number = Number(prompt("Enter Math Marks"));
var BioMarks:number = Number(prompt("Enter Bio Marks"));
var ComputerMarks:number = Number(prompt("Enter Computer Marks"));
var grade:string;
var TotalMarks:number = PhysicsMarks + CheistryMarks + MathMarks + BioMarks + ComputerMarks
var Percentage:number = (TotalMarks/500) * 100
console.log("Percentage :", Percentage)
if (Percentage <= 100 && Percentage >= 90) {
    grade = "A";
    console.log("Grade :",grade)
  } else if (Percentage <= 89 && Percentage >= 80) {
    grade = "B";
    console.log("Grade :",grade)
  } else if (Percentage <= 79 && Percentage >= 70) {
    grade = "C";
    console.log("Grade :",grade)
  } else if (Percentage <= 69 && Percentage >= 60) {
    grade = "D";
    console.log("Grade :",grade)
  } else if (Percentage <= 59 && Percentage >= 50) {
    grade = "F";
    console.log("Grade :",grade)
  }


// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var basic = Number(prompt("Enter Basic Sallery"));
var gross:number ;
var da:number ;
var hra:number ;
if (basic <= 10000) {
    da = basic * 0.8;
    hra = basic * 0.2;
}
else if (basic <= 20000) {
    da = basic * 0.9;
    hra = basic * 0.25;
}
else {
    da = basic * 0.95;
    hra = basic * 0.3;
}
gross = basic + hra + da;
console.log("Gross Salery :", gross);


// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var getUnit:number = Number(prompt("Enter Unit"));
var amt:number = 0;
if(getUnit > 0 && getUnit <= 50){
        amt = getUnit * 0.50
} else if(getUnit > 50 && getUnit <= 150){
        amt = 50 + ((getUnit - 50) * 0.75)
}else if(getUnit > 150 && getUnit <= 250){
    amt = 150 + ((getUnit - 150) * 1.20)
}else {
    amt = 50 + 150 + 250 + (getUnit - 250) * 1.50
}
console.log("total electricity bill",amt)