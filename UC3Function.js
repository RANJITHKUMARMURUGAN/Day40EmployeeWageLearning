// const IS_ABSENT = 0;
// let empCheck = Math.floor(Math.random()*10)%3;
// if(empCheck==IS_ABSENT) {
//     console.log("The UC1 Employee is Obsent ");
//     return;
// } else{
//     console.log("The UC1 Employee is Present");
// }
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOURS = 20;
 
 function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
             return FULL_TIME_HOURS;
             default:
                return 0;
    }
 }
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs*WAGE_PER_HOURS;
console.log("Hour:"+" "+empHrs+" "+"Employee Wages is: "+" "+empWage);
