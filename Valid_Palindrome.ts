function isPalindrome(s: string): boolean {
    if(s.length == 0){
        return true;
    }
const cleanString:string =  s.toLowerCase()
    .replace(/[^a-z0-9]/g, "");
    let i:number = 0;
    let j:number = cleanString.length - 1;

    while (i < j) {
        if (cleanString[i] !== cleanString[j]) {
            return false;
        }

        i++;
        j--;
    }
    return true
};