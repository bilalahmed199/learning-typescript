function pyramidShape(n: number) {
  for (let i = 0; i < n; i++) {
    let row = ''
    let spaces = n - i // Calculate the number of spaces based on the row
    for (let j = 0; j < i + 1; j++) {
      row += '#'
    }
    console.log(`${' '.repeat(spaces)}${row}`)
  }
}

pyramidShape(4)
