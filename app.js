// ---------- Chapter 1 "ALERTS" ----------

// 1. Write a script to greet your website visitor using JS alert box.
    // alert("Welcome");

// 2. Write a script to display following message on your web page:
    // alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web page: (Hint : Use line break)
    // alert("Welcome to JS Land... \nHappy Coding!");

// 4. Write a script to display following messages in sequence:
    // alert("Welcome to JS Land...");
    // alert("Happy Coding!");

// 5. Generate the following message through browser’s developer console:
    // alert("Hello.. i can run JS throught my web browser's console")

// 6. Make use of alerts in your new/existing HTML & CSS
// project.
// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// -- END --





// ---------- Chapter 2 "VARIABLES FOR STRINGS" ----------

// 1. Declare a variable called username.
    // var username = "";

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
    // var myName;
    // myName = "Faizan Khan";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
    // var message = "Hello World";
    // alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
    // var name = "Jhone Doe";
    // var age = "15 years old"
    // var course = "Certified Mobile Application Development"
    // alert(name);
    // alert(age);
    // alert(course);

// 5. Write a script to display the following alert using one JS variable:
    // var food = "PIZZA \nPIZZ\nPIZ\nPI\nP";
    // alert (food);

// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
    // var email = "example@example.com";
    // alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
    // var book;
    // book = "A smarter way to learn JavaScript.";
    // alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS
    // var message = "Yah! I can write HTML content through JavaScript";
    // document.write(message);

// 9. Store following string in a variable and show in alert and browser through JS
    // var message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    // alert(message);
    // document.write(message);

// -- END --





// ---------- Chapter 3 "VARIABLES FOR NUMBERS" ----------

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
    // var age = 22;
    // alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
    // var i = 14;
    // alert("You have visited this site " + i + " times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
    // var birthYear = 1997;
    // document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com. Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
    // var name = "<b>John Doe</b>";
    // var title = "<b>T-shirt</b>(s)";
    // var qty = "<b>" + 5 +"</b>";

    // document.write(name + " ordered " + qty + " " + title + " on XYZ Clothing store");

// -- END --





// ---------- Chapter 4 "VARIABLE NAMES: LEGAL & ILLEGAL" ----------

// 1. Declare 3 variables in one statement
    // var one, two, three;

// 2. Declare 5 legal & 5 illegal variable names.
    // legal
    // 1: fullName = ""; (camelCase)
    // 2: country_name = "";
    // 3: $name = "";
    // 4: _name = "";
    // 5: 123 = "";
    // illegal
    // 1: %name (special charecter)
    // 2: country name = ""; (space between)
    // 3: alert = ""; (javascript keywords)
    // 4: 
    // 5:

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________.
    // var a = "<b>Rules for naming JS variables</b>";
    // var b = "Variable names can only contain <u>letters</u>, <u>numbers</u>, <u>$</u>, and <u>underscrore</u>";
    // var c = "Variables must begin with a <u>letter</u>, <u>$</u>, <u>underscrore</u>";
    // var d = "Variable names are case <u>case-sensitive</u>";
    // var e = "Variable names should not be JS <u>JavaScript Keywords</u>";
    // document.write(a + "<br><br><br>" + b + "." + "<br>" + c + "." + "<br>" + d + "." + "<br>" + e + ".")

// -- END --





// ---------- Chapter 5 "MATH EXPRESSIONS" ----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
    // var value1 = +prompt("Enter 1st Number");
    // var value2 = +prompt("Enter 2nd Number");
    // var sum = (value1 + value2);
    // document.write("Sum of " + value1 + " and " + value2 + " is " + sum);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
    // var value1 = +prompt("Enter 1st Number");
    // var value2 = +prompt("Enter 2nd Number");

    // var sub = (value1 - value2);
    // var mult = (value1 * value2);
    // var div = (value1 / value2);
    // var mod = (value1 % value2);

    // document.write("Subtraction of " + value1 + " and " + value2 + " is " + sub);
    // document.write("Multiplication of " + value1 + " and " + value2 + " is " + mult);
    // document.write("Division of " + value1 + " and " + value2 + " is " + div);
    // document.write("Modulus of " + value1 + " and " + value2 + " is " + mod);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”

    // var un_num; //a
    // var b = "Value after variable declaration is "; //b
    // var num = "5"; //c
    // var c = "Initial value: "; //d
    // var e = "Value after increment is: " + num++ //e

    // document.write(b + un_num + "</br> " + c + num + "</br>" + e);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
    // var ticketCost = 600;
    // var ticket = 5;

    // var calc = ticket * ticketCost;

    // document.write("Total cost to buy " + ticket + " tickets to a movie is " + calc + "PKR");

// 5. 5. Write a script to display multiplication table of any number in your browser. E.g
    // var value1 = +prompt("Enter Table No");

    // for (var i = 1; i <= 10; i++) {
    //     document.write(value1 + " x " + i + " = " + value1*i + "</br>");
    // }



