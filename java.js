// palindrome 

function checkPalindrome(str) {
    const len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True';
}

const string = ('mom');

const value = checkPalindrome(string);

console.log(value);

// duplicates

const names = ["Mike","Matt","Jenny","Nancy","Adam","Jenny","Nancy","Carl","Mike","Adam"];  
let unique = [...new Set(names)]; 
console.log(unique);

// largest

var array = [267, 306, 108, 249, 590, 900, 34];
var largest = Math.max.apply(Math, array); 
console.log(largest)

// smallest

var array = [267, 306, 108, 249, 590, 900, 34];
var smallest = Math.min.apply(Math, array); 
console.log(smallest);

// fizzbuzz

function fizzBuzz(n) {
   if (n % 3 === 0 && n % 5 === 0) {
     console.log('fizzbuzz')     
      } else if (n % 3 === 0) {
        console.log('fizz')
      } 
       else if (n % 5 === 0) {
        console.log('buzz')

    }
  }
  console.log(fizzBuzz(3));

// even or odd

function evenOdd(n) {
    if (n % 2 == 0) {
    console.log("Even")
    }
    else if (n % 2 !== 0) {
    console.log("Odd")
    }
    }
console.log(evenOdd(3));

// sort numbers ascending/descending order

var numbers = [3,4,56,7,8,1];
numbers.sort(function(a, b){return a-b});
console.log(numbers)
numbers.sort(function(a, b){return b-a});
console.log(numbers)

// bank account


class BankAccount {
  constructor(firstname, middlename, lastname, acctype, balance, status) { //this is similar to Python's __init__
    this.firstname = firstname
    this.middlename = middlename
    this.lastname = lastname
    this.acctype = acctype
    this.balance = balance
    this.status = status
}
withdraw(amount) {
  this.balance -= amount
}
deposit(amount) {
  this.balance += amount
}
}
let account = new BankAccount("Wesley","James","Kolar","Checking",1000000,"Opened")
console.log(account)

account.withdraw(198)
console.log(account)

account.deposit(300)
console.log(account)