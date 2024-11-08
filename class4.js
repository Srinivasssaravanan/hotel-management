
            console.log("Enter a number: ")
            process.stdin.on("data", num => {
                console.log("enter another number: ")
                process.stdin.on("data", num2 => {
                    console.log("Addition of tow numbers is ", addition(num, num2))
                })  
            })
            function addition(x, y){
                return parseInt(x)+parseInt(y);
            }