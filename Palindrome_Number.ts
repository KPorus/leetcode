function isPalindromeNumber(x: number): boolean {
    let act:number = x;
    let rev:number = 0;

    if(x<0 || (x%10)===0 && x !==0){
        return false;
    }

    while(x>0){
        let digit:number = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x/10)
    }

    return act === rev
};