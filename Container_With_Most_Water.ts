// Version 1: Two Pointer Approach
// j-i represents the width of the container and Math.min(height[i],height[j]) represents the height of the container. The area of the container is given by the formula: area = width * height. We can use two pointers, one starting from the left end (i) and the other from the right end (j) of the array. We calculate the area for each pair of heights and keep track of the maximum area found so far. If the height at the left pointer is less than the height at the right pointer, we move the left pointer to the right (i++), otherwise, we move the right pointer to the left (j--). This way, we explore all possible pairs of heights and find the maximum area.
function maxArea(height: number[]): number {
    let i :number =0;
    let j:number = height.length -1;
    let res:number =0;
    while(i < j){
        res = Math.max(res, (j-i)*Math.min(height[i],height[j]) )
        if(height[i] < height[j]) i++
        else j--
    }
    return res;

};