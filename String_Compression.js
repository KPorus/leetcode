// Case 1: chars = ["a","a","b","b","c","c","c"] Returns 6, chars = ["a","2","b","2","c","3"]
// Case 2: chars = ["a"] Returns 1, chars = ["a"]
// Case 3: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"] Returns 4, chars = ["a","b","1","2"]
var compress = function(chars) {
   let index = 0;
   let i = 0;
   if(chars.length == 1){
    return 1
   }
   while(i<chars.length){
    let count = 0;
    let char = chars[i]

    while(i<chars.length && chars[i] == char){
        i++;
        count++;
    }
    chars[index]=char;
    index++;

    if (count > 1) {
       for (let digit of count.toString()) {
                chars[index] = digit;
                index++;
            }
        }
   }

   return index;
};