function designerPdfViewer(h: number[], word: string): number {
  let abcAlphabets: string = 'abcdefghijklmnopkrstuvwxyz'
  // split string into array
  const objKeys: string[] = abcAlphabets.split('')
  //   console.log(objKeys)

  const objValues: number[] = h
  // console.log(objValues)

  let obj: { [key: string]: number } = {}

  // fill object (dictionary) i.e., keys = 'objKeys' array and values = 'objValues' array
  objKeys.forEach((key, index) => {
    obj[key] = objValues[index]
  })
  // console.log(obj)

  let keyInWord: string[] = word.split('')
  // console.log(keyInWord)

  let wordValue: number[] = []
  for (let key in obj) {
    keyInWord.forEach((num) => {
      if (key === num) {
        wordValue.push(obj[key])
      }
    })
  }

  let max = wordValue[0]
  for (let val in wordValue) {
    if (wordValue[val] > max) {
      max = wordValue[val]
    }
  }
  let selectionArea = max * word.length * 1
  // console.log(selectionArea)

  // console.log(max)
  // console.log(`passed: ${wordValue}`)

  return selectionArea
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    'abc',
  ),
)
