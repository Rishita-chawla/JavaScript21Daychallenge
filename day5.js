let favoriteColors=["black","peach","pink","navyBlue","white"];
//original array
console.log("original array: ",favoriteColors);
//original length of the array
console.log("original length of the array: ",favoriteColors.length);
//adding elements to the end of the array
//returns the total length of the array
console.log("returns the total length of the array after adding an element to the end of the array: ",favoriteColors.push("iceBlue"));
//array after adding an element in the end
console.log("array after adding an element at the end: ",favoriteColors);
//adding elements to the front of the array
console.log("returns the total length of the array after adding an element to the front: ",favoriteColors.unshift("teal"));
console.log("array after adding an element to the front: ",favoriteColors);
//removing element from the end of the array
//returns the element removed
console.log("element removed from the end: ",favoriteColors.pop());
console.log("array after removing an element from the end: ",favoriteColors)
//array after removing the element from the front
console.log("element removed from the front: ",favoriteColors.shift());
console.log("array after removing an element from the front: ",favoriteColors);
//modifying the array using splice
console.log("modifying the array using splice: ",favoriteColors.splice(0,0,"lightLimeGreen"));
//array after modifying it using splice
console.log("array after modifying it using splice: ",favoriteColors);
//accessing elements using index
console.log("Element present at 3rd index: ",favoriteColors[2]);
console.log("Element present at 1st index: ",favoriteColors[0]);
//checking for an index position greater than the length of the array(should return undefined)
console.log("Element present at the 11th index: ",favoriteColors[10]);
//negative indexing
console.log("Element present at the second last position: ",favoriteColors[favoriteColors.length-2]);