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
    console.log(output.slice(0, -1));
}

ConvertNums(process.argv.splice(2))