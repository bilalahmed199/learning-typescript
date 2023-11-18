let studentMArks:number[] = [78,73,67,38,33,21]

function gradingStudent(grades: number[]): number[] {
    // Write your code here
    let resultGrades: number[] = [] 
    grades.forEach((num)=>{
    if(num >= 38){
        if((num+2) % 5 ==0 || (num +1) % 5 ==0) {
            if (((num +2) - num) < 3 ) {
                resultGrades.push(num+2)
            } else if(((num + 1) - num) <3) {
                resultGrades.push(num+1)
            } else {
                resultGrades.push(num); 
            }
        } else {
                resultGrades.push(num)
        }   
    } else {
        resultGrades.push(num)
    }
})

    return resultGrades
}

gradingStudent(studentMArks)


// answer submitted: (by GPT)
function gradingStudents(grades: number[]): number[] {
    return grades.map((num) => {
        if (num >= 38) {
            const nextMultipleOf5 = Math.ceil(num / 5) * 5;
            return (nextMultipleOf5 - num < 3) ? nextMultipleOf5 : num;
        } else {
            return num;
        }
    });
}

