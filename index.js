/*
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/

function calculateUnitsTrap(indexLeftWall, indexRightWall, vector){
    let unitsTrapped=0
    for(let i=indexLeftWall+1; i < indexRightWall; i++){
        unitsTrapped += vector[indexLeftWall] - vector[i]  
    }
    return unitsTrapped
}

function findLimitCandidate (leftWall, vector){
    let rightLimit = leftWall+1;
    let limit = false
    while(rightLimit < vector.length && !limit){
        if(vector[rightLimit] >= vector[leftWall] ){
            limit=true;
            rightLimit--
        }
        rightLimit++
    }
    return limit?rightLimit:0
}

function calculateWaterTrap (input){
    let i=0
    let unitsTrapped=0;
    while(i+1 <= input.length ) {
        let next = input[i+1];
        let base = input[i]  
        
        if(base > next){
            //console.log(`Start counting on index: ${i} for base: ${input[base]} and ${input[next]}`)
            let rightLimit = findLimitCandidate(i,input);
            if(rightLimit!=0){
                unitsTrapped+=calculateUnitsTrap(i,rightLimit,input)
                i=rightLimit
            }else{
                i++
            }
        }else{
            i++
        }
    }
    return unitsTrapped  
}


console.log("################################################################")
console.log("# Given n non-negative integers representing an elevation map  #")
console.log("# where the width of each bar is 1, compute how much water     #")
console.log("# it is able to trap after raining.                            #")
console.log("################################################################")
let input = [0,1,0,2,1,0,1,3,2,1,2,1]
//let input = [1,6,5,4,3,2,1,0,0,1,0,0,1]
//let input = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]

console.log(`The array to calculate is: [ ${input.join(", ")} ]`)
let unitsTrapped= calculateWaterTrap(input);
console.log(`Units of water that can be trapped: ${unitsTrapped}`)