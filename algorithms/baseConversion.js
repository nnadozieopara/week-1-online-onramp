//This function determines whether a given number is valid in a given base
//For example, 121 is not valid in base 2, only valid digits are 0,1

function IsConvertible(number, base){
    while(number>0){
        let r = number % 10;
        if(r>=base){
            return false;
        }
        number = (number - r)/10;
        if(number==0 && r < base){
            return true;
        }
    }
}

//This function converts any given number to base 10
//This function doesn't convert numbers beyond base 10 to base 10

function convertToBaseTen(number, base){
    let sum = 0;
    let result = [];
    while(number > 0) {
        r = number % 10;
        result.push(r);
        number = (number - r)/10;
    }

    let count = result.length;
    let j = 0;
    while(j < count){
        sum += result[j] * Math.pow(base, j);
        if (j==count -1){
            return sum;
        }
        j++;
    }
}


//This function converts a given number from base 10 to another base less than or equal to 16

function ConvertToOtherBase(number,base) {
    var Z = [];
    var index = -1;
     var A = ["A", "B", "C", "D", "E", "F"];
    for (i = number; 0 < i; i = (i - (i % base)) / base) {
      if (i % base >= 10) {
        Z.push(A[(i % base) - 10]);
      } else {
        Z.push(i % base);
      }
      index = index + 1;
    }
    let result = "";
    for (j = index; j >= 0; j--) {
      result +=(Z[j]);
    }
    return result;
}

//This is the code that converts from one base to another

function BaseConvert(number, currentBase, newBase){
    //check if number can be converted in the current base
    if(IsConvertible(number,currentBase)){
        //if new base is not 10, first convert from current base to base 10
        if(currentBase != 10){
           let baseTen = convertToBaseTen(number,currentBase);
           console.log(baseTen);
           let newNumber = ConvertToOtherBase(baseTen, newBase);
           console.log(newNumber);
           return newNumber;
        }else{
            //if the new base is 10, convert directly to base 10
            
            result = ConvertToOtherBase(number,newBase);
            console.log(result);
            return result;
        }
    }else{
        return "Invalid Operation"
    }
}

console.log(BaseConvert(109,6,2));



