var nflTeams = ['Chiefs','Broncos,','Chargers','Raiders']
var playerNumbers = [15,87,11,19]
var hasWonSuperBowl = [true,true,false,true]

//remove and print the best team from the nflTeams array, leaving only the bad teams in the array
//call method on hasWonSuperBowl also so the two arrays match
console.log(nflTeams.shift())
console.log(nflTeams)

//print the playerNumbers array, add an element to the beginning, reprint to confirm
console.log(playerNumbers)
playerNumbers.unshift(25)
console.log(playerNumbers)

//print the middle two elements of the hasWonSuperBowl array
console.log(hasWonSuperBowl.slice(1,3))

//assuming the index for each team in the nflTeams array corresponds to the hasWonSuperBowl array, print if the Chargers have ever won the super bowl
console.log(`The ${nflTeams[1]} have won the super bowl: ${hasWonSuperBowl[1]}`)

//print the jersey number of the Chiefs Tight End
console.log(playerNumbers[2]);
