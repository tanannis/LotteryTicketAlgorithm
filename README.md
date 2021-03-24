# LotteryTicketAlgorithm

**Challenge: Design a lottery ticket algorithm so customers can enter a lottery for a particular show, and the system will select a subset of winners to offer the tickets to. Winners are picked based on the number of tickets that are available. This could include an algorithm for picking winners, an API design for entering the lottery, a database model, etc.

##

**My Solution and explaination**

Database:

I suggest using a relational database, it can be saved in local servers or Cloud services (e.g. Google Cloud, AWS). Because it’s a lottery, I assume each user can only win 1 lottery ticket at a time per day (but the user can request to enter multiple lotteries). Thus in this relationship:

LotteryTicket.hasMany(User)   
User.hasMany(Order)
User.belongsTo(LotteryTicket)

An example of models can be something like this (a dictionary of info) :

LotteryTicket : {
	lotteryTicketId: Int,
	showName: String,
	location: String,
	showTime: String,
	price: Int,
	users: [ … ]   // array of user ids on the waiting list
}

User: {
	userId: Int,
	phone: String,
	orderHistory: [ {...}, {...}, {...} …]   // array of orders
}

Order: {
	orderId: Int,
	ticketId: Int,
	creditCard: String,
	billingAddress: String,
}

##

**Algorithm: please check the RandomlyPicked.js file**

When a user requests to enter a lottery, the user id will be stored in a “waiting list” array that includes all other user ids for a specific show. If there are fewer users than unsold tickets available, all users are winners. Otherwise, we can use an algorithm to pick winners : please check the RandomlyPicked.js file.

For example, if there are 9 users waiting for the Lion King show but only 5 lottery tickets available, then n = 5. The waiting list might look like this: [ 83, 9, 35, 357, 18, 34, 5, 88, 90 ] from index 0 to 8. We can generate the winners randomly by the Index number on the waiting list array.

One of the randomly generated answers is winnerIndices = [ 3, 8, 7, 5, 2 ] for n = 5, which means the winners will be userId: 357, 90, 88, 34, 35. 

**Time and Space complexity for this algorithm**

If there are thousands to millions of unsolve tickets per show, the time complexity will be O(n) because the while loop is iterating through “n” available lottery tickets. The space complexity will also be O(n) because it created an array of winner indices, and the number of winners will equal the number of available lottery tickets. 

However, the time complexity will become O(1) in real life, because it is very unlikely to have more than 100 unsold show tickets (lottery tickets), most shows are likely to have only around 10 to 30 lottery tickets available, thus generating winners for 30 tickets is constant time. This also applies to the space complexity because an array of 30 winners takes constant space.


** Happy Coding ^^
-> Having fun by Annis Tan





