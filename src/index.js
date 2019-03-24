/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
let count=0; 
preferences.forEach((item,i,arr)=>{ 
if(arr.indexOf(arr[arr[arr[item-1]-1]-1]) === i)
{count++}; 
}); 
return Math.floor(count/3);
};
