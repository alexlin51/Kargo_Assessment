function ConvertNums(input){
    const store = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    };
    
    let output = "";
    input.forEach(num => {
        let n = num.toString().split("");
            n.forEach(digit => {
            output += store[digit];
        });
        output += ",";
    });
    return output.slice(0, -1)
}
  
let input1 = [3,25,209];
console.log(ConvertNums(input1));
  
let input2 = [10, 300, 5];
console.log(ConvertNums(input2));

// Addition test cases
let test1 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(ConvertNums(test1));

let test2 = [0123456789];
console.log(ConvertNums(test2));