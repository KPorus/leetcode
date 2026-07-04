function longestOnes(nums: number[], k: number): number {
    let left:number = 0;
    let zerocount:number =0;
    let max:number = 0;

    for (let right:number =0; right<nums.length; right++){
        if(nums[right]==0){
            zerocount++;
        }
        while(zerocount>k){
            if(nums[left]==0){
                zerocount--;
            }
            left++
        }
        max = Math.max(max, right-left+1);
    }
    return max
};