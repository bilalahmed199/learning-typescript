function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here

  let totalBill = bill.reduce((sum, num) => sum + num, 0)
  console.log(`Total bill:  ${totalBill}`)

  let sharedItemsBill = totalBill - bill[k]
  console.log(`Total shared bill:  ${sharedItemsBill}`)

  let actualBill = sharedItemsBill / 2
  console.log(`Actual bill is: ${actualBill}`)

  if (b == actualBill) {
    console.log('Bon Appetit')
  } else {
    console.log(b - actualBill)
  }
}

bonAppetit([3, 10, 2, 9], 1, 12)
