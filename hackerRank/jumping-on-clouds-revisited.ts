// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c:number[], k:number) {
  let energyLevel:number = 100;
  const arrayLength = c.length;

  let currentIndex = 0;

  do {
    currentIndex = (currentIndex + k) % arrayLength;
    energyLevel -= c[currentIndex] === 1 ? 3 : 1;
  } while (currentIndex !== 0);

  return energyLevel;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
