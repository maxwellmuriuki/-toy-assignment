function calculateGrade(marks){
    if (marks>79){
        return "A";
    } else if (marks>= 60 && marks <=79){
        return "B";
    }else if (marks >=49 && marks <=59){
        return "C";
    }else if (marks >=40 && marks <=49){
        return "D";
    }
    else{return "E"}
}
function studentGradeGenerator(){
    const marks = parseFloat(prompt("enter the student marks (o-100):"));
    if (isNaN(marks)|| marks <o || marks >100){
        return "invalid input.enter between 0 and 100."
     }
     const grade =calculateGrade (marks);
     return "the students grade  is $[grade}";

}
 const result = studentGradeGenerator();
 console.log (result)