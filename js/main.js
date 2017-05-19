// 3. Create an array with 5 different strings. Log the length of your array, and log the length of each of the strings in your array. Finally, reverse the array and console the array again. -->
	var dogs = ["Akita", "Shiba", "German Shepard", "Alaskan Malamute", "Great Pyrenees"]
	console.log("length: " + dogs.length)
	// reverse the order of dogs permanently
	dogs.reverse()
	console.log("reversed: " + dogs)

// 4. Create an array of at least 5 numbers. Sort the array numerically, in ascending order (smallest to biggest). Then sort it in descending order.
	var height = [140, 156, 156, 180, 165, 130]
	// ascending order
	console.log("ascending order: " + height.sort( function(a, b){return a-b}))
	 // reverse order to descending order
	height.sort ( function (a, b){return b-a})
	console.log("descending order " + height)

// 5. Create an array of three strings. Add two new strings to the end of the array, remove one from the beginning. Console the final array - it should have four strings.
	var sushi = ["hamachi", "uni", "ikura"]
	// add 2 new strings
	sushi.push("toro", "ebi")
	console.log(sushi)
	// remove the beginning sushi
	sushi.shift()
	console.log(sushi)