function getAverage(scores){
    let sum = 0;
    for(let grade of scores){
        sum += grade;
    }
    let average = sum / scores.length; 
    return average;
}

function getGrade(score){
   
    if(score === 100){
        return "A+"
    } else if(score >= 90){
        return "A"
    } else if(score >= 80){
         return "B"
    } else if(score >= 70){
         return "C"
    } else if(score >= 60){
         return "D"
    } else {
         return "F"
    }

   
}

function hasPassingGrade(score){
    return getGrade(score) !== "F";
}

function studentMsg(scores,studentScore){
    const average =getAverage(scores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);
    const messageStatus = passed ? "You passed the course." : "You failed the course.";

    return `Class average: ${average}. Your grade: ${grade}. ${messageStatus}`

}


/*Tests: */
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

console.log(getGrade(100));
console.log(getGrade(90));
console.log(getGrade(99));
console.log(getGrade(80));
console.log(getGrade(89));
console.log(getGrade(70));
console.log(getGrade(79));
console.log(getGrade(69));
console.log(getGrade(60));
console.log(getGrade(59));
console.log(getGrade(0));

console.log(hasPassingGrade(100))
console.log(hasPassingGrade(59))
console.log(hasPassingGrade(75))
console.log(hasPassingGrade(88))

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85))
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))
