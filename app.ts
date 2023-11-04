
 const num1Element = document.getElementById('numb1') as HTMLInputElement
 const num2Element = document.getElementById('numb2') as HTMLInputElement
 const buttonElement = document.querySelector('button')!; 


 // array types
const numarray:number[] = [];
const textarray:string[] = [];

// alias type 
type numORstring = number | string 
type printResultObjType =  {val:number; timestamp:Date}

// interface type 
        // we can use intrface in the place of alias by writing interface in the place type
        type printResultInterfaceType =  {
            val:number;
            timestamp:Date
        }
    

function add(num1:numORstring, num2:numORstring){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 +''+ num2
    }else{
        +num1 +  +num2
    }
}
    // obj in parameter
 function printResult(resultObj: printResultObjType){
      // return (resultObj.val)
      console.log(resultObj.val)
 }

    buttonElement.addEventListener('click',() =>{
        const num1 = num1Element.value
        const num2 = num2Element.value
        const result = add(+num1, +num2)
        numarray.push(result as number)
        const stringresult = add(num1, num2)
        textarray.push(stringresult as string)
        console.log(result)
        console.log(stringresult)
        console.log(numarray, textarray)

        // giving obj as parameter
        printResult({
            val:result as number,
            timestamp:new Date()
        })
    
     })

     // example of generic type is   const numarray: Array<number> = [];

     // other example of genrics type is promise
      const mypromise = new Promise<string>((resolve, reject)=>{
         setTimeout(()=>{
            resolve('it worked')
         },1000)
      })

      mypromise.then((result)=>{
        console.log(result.split('w'))
      })



