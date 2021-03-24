//This algorithm returns an array of INDEX numbers of all winners

function getRandomIndex(waitingList, n) {
  //if there are less users than number of unsold tickets, all users are winners
  if(waitingList.length < n) return waitingList

  let winnerIndices = []
  const waitingCount = waitingList.length
  // console.log(waitingCount)

  count = 0;
  while(count < n){
    const index = Math.round(Math.random() * waitingCount);
    if(!(winnerIndices.includes(index)) && index < waitingCount){
      winnerIndices.push(index);
      count ++
    }
    if(count === n) break
  }
  return winnerIndices
}

//test cases
// getRandomIndex([83, 9, 35, 357, 18, 34, 5, 88, 90], 5)
// getRandomIndex([83, 9, 35, 357, 18, 34, 5, 88, 90, 100, 20, 4, 6, 45, 12], 7)


//You can play around with this code in my replit https://repl.it/@tanannis/LotterySystemAlgoritm
