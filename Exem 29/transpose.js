let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for(let i=0; i<arr.length; i++){
    let str = "";
    for(let j=0; j<arr[i].length; j++){
        str += arr[j][i] + " ";
    }
    console.log(str);
}