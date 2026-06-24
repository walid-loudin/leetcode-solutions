function numberOfSteps(num: number): number {

let n1 = num % 2;
let counter = 0;

while(num != 0){
    if(num % 2 != 0){
        num--;
        counter++;
    }
    else{
        num /= 2;
        counter++;
    }
}

return counter;

};