export const randomUserNames = [
    "James",
    "Olivia",
    "Liam",
    "Emma",
    "Noah",
    "Ava",
    "Benjamin",
    "Charlotte",
    "William",
    "Sophia",
    "Elijah",
    "Mia",
    "Henry",
    "Harper",
    "Alexander",
    "Evelyn",
    "Samuel",
    "Abigail",
    "Daniel",
    "Amelia",
    "Matthew",
    "Elizabeth",
    "Michael",
    "Sofia",
    "Joseph",
    "Victoria",
    "Daniel",
    "Madison",
    "David",
    "Penelope",
    "Josephine",
    "Jackson",
    "Grace",
    "Samuel",
    "Natalie",
    "Christopher",
    "Lily",
    "Gabriel",
    "Zoe",
    "Andrew",
    "Lillian",
    "Nicholas",
    "Stella",
    "William",
    "Scarlett",
    "Christopher",
    "Grace",
    "Samuel",
    "Avery",
    "Joshua",
    "Addison",
    "Ethan",
    "Emily",
    "Alexander",
    "Sofia",
    "Daniel",
    "Chloe",
    "Mason",
    "Victoria",
    "William",
    "Avery",
    "Noah",
    "Harper",
    "Andrew",
    "Isabella",
    "Matthew",
    "Sofia",
    "Ethan",
    "Harper",
    "Elizabeth",
    "Oliver",
    "Amelia",
    "William",
    "Grace",
    "Henry",
    "Eleanor",
    "James",
    "Hannah",
    "Owen",
    "Mia",
    "Oliver",
    "Scarlett",
    "Benjamin",
    "Addison",
    "David",
    "Charlotte",
    "Caleb",
    "Penelope",
    "Ethan",
    "Harper",
    "Elizabeth",
    "Sophia",
    "William",
    "Grace",
    "Henry",
    "Eleanor",
    "Andrew",
    "Hannah",
    "Owen",
    "Abigail",
    "Noah",
    "Chloe",
    "Elijah",
    "Mia",
    "Gabriel",
    "Sophia",
    "Henry",
    "Emma"
  ]; 
export function randomUserName() {
        return randomUserNames[randomInteger()]
}

function randomInteger() {
  return Math.floor(Math.random() * 101);
}