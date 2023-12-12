function angryProfessor(k: number, a: number[]): string {
  // Write your code here
  let attendees = 0
  a.forEach((num) => {
    if (num <= 0) {
      attendees += 1
    }
  })
  if (attendees >= k) {
    return 'NO'
  } else {
    return 'YES'
  }
}

console.log(angryProfessor(3, [-1, -2, 0, 7]))
