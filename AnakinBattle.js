let anakinAttack = 25;
let anakinHealth = 100;
let anakinDefence = 0;

let obiWanAttack = 35;


if(anakinAttack > obiWanAttack) {
  console.log("Anakin has the stronger attack");
} else if (anakinAttack < obiWanAttack) {
  console.log("Obi Wan has the stronger attack");
} else {
  console.log("The force is with both of them");
}

if(anakinHealth <= 0) {
  console.log("Anakin has fallen");
} else {
  anakinHealth -= obiWanAttack;
  console.log(`Anakin's health is now: ${anakinHealth}`);
}

anakinDefence += 25;

if(anakinHealth <= obiWanAttack - anakinDefence) {
  console.log("Anakin has fallen");
} else {
  anakinHealth -= obiWanAttack - anakinDefence;
  console.log(`Anakin's health is now: ${anakinHealth}`);
}


console.log("Anakin has taken a stimpack");

if(anakinHealth + 50 >= 100) {
  anakinHealth = 100;
  console.log(`Anakin's health is now: ${anakinHealth}`);
} else {
  anakinHealth += 50;
  console.log(`Anakin's health is now: ${anakinHealth}`);
}

for(let i = 0; i < 5; i++) {
  anakinHealth -= obiWanAttack - anakinDefence;
  console.log(`Anakin's health is now: ${anakinHealth}`);
}

while (anakinHealth > 0) {
  anakinHealth -= obiWanAttack - anakinDefence;
  console.log(`Anakin's health is now: ${anakinHealth}`);
  if(anakinHealth <= 0) {
    console.log("Anakin has fallen to the dark side and is no longer alive");
    
  }
}
