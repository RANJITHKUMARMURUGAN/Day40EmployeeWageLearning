//UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%3;
if(empCheck==IS_ABSENT) {
    console.log("The UC1 Employee is Obsent ");
    return;
} else{
    console.log("The UC1 Employee is Present");
}
//UC2
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOURS = 20;
 let empHrs = 0;
 //let empCheck = Math.floor(Math.random()*10)%3;
 switch(empCheck){
     case IS_PART_TIME:
         empHrs = PART_TIME_HOURS;
         break;
     case IS_FULL_TIME:
          empHrs = FULL_TIME_HOURS;
          break;
          default:
              empHrs = 0;
 }
 let empWage = empHrs * WAGE_PER_HOURS;
 console.log("The Employee Wages is: "+" "+empWage);
