var nflTeams = ['Chiefs','Broncos,','Chargers','Raiders']
var playerNumbers = [15,87,11,19]
var hasWonSuperBowl = [true,true,false,true]

//remove and print the best team from the nflTeams array, leaving only the bad teams in the array
console.log(nflTeams.shift())
console.log(nflTeams)

//print the playerNumbers array, add an element to the beginning, reprint to confirm
console.log(playerNumbers)
playerNumbers.unshift(25)
console.log(playerNumbers)

//print the middle two elements of the hasWonSuperBowl array
console.log(hasWonSuperBowl.slice(1,3))
