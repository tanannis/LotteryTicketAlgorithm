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

/*
One of the randomly generated answers is winnerIndices = [ 3, 8, 7, 5, 2 ] for n = 5, which means the winners will be userId: 357, 90, 88, 34, 35. 
You can play around with this code in my repl. https://repl.it/@tanannis/LotterySystemAlgoritm

Time and Space complexity for this algorithm:
If there are thousands to millions of unsolve tickets per show, the time complexity will be O(n) because the while loop is iterating through “n” available lottery tickets. The space complexity will also be O(n) because it created an array of winner indices, and the number of winners will equal the number of available lottery tickets. 
However, the time complexity will become O(1) in real life, because it is very unlikely to have more than 100 unsold show tickets (lottery tickets), most shows are likely to have only around 10 to 30 lottery tickets available, thus generating winners for 30 tickets is constant time. This also applies to the space complexity because an array of 30 winners takes constant space.
*/



