var maxVowels = function(s, k) {
    const vowels = new Set(['a','e','i','o', 'u'])
    let count = 0;
    for (let i=0; i<k;i++){
        if(vowels.has(s[i])){
            count++;
        }
    }
    let maxCount = count;

    for(let i = k; i<s.length;i++){
        // Remove the character that is sliding out of the window and add the new character that is sliding into the window
        if(vowels.has(s[i-k])){
            count --;
        }
        
        if (vowels.has(s[i])) {
            count++;
        }

        maxCount = Math.max(maxCount, count);
    }
    return maxCount
};