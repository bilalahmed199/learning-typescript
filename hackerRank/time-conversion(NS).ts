// convert 12 hours to 24 hours
// not solved yet

let time: string = '07:05:45PM'

function timeConversion(s: string): string {
  const am_pm_time = s.slice(-2)
  const [hours, minutes, seconds] = s.slice(0, -2).split(':')
  let convertedHours = parseInt(hours, 10)
  if (am_pm_time == 'PM' && convertedHours < 12) {
    convertedHours += 12
  } else if (am_pm_time == 'AM' && convertedHours == 12) {
    convertedHours = 0
  }
  return `${convertedHours}:${minutes}:${seconds}`
}

timeConversion('07:05:45PM')
