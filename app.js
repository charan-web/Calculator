class Calculator{
    constructor(previousText,currentText){
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }
    clear(){
        this.currentOperand = " ";
        this.previousOperand = " ";
        this.operand=undefined

    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number==='.' && this.currentOperand.includes(".")) return
        this.currentOperand= this.currentOperand.toString() + number.toString()
       
    }
    chooseOperation(operation){
        if(this.currentOperand ===" ")return
        if(this.previousOperand !==" "){
            this.compute()
        }
        this.operand = operation
        this.previousOperand = this.currentOperand
        this.currentOperand=' ';


    }

getDisplayNumber(number){
    return number
}

 




    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operand){
            case "+" : computation = prev + current
                         
                           
                            break;
            case "-" : computation = prev - current
                            break;
            case "*" : computation = prev * current
                            break;
             case "/" : computation = prev / current
                            break;
            default : return
        }
        this.currentOperand = computation
        this.operand = undefined
        this.previousOperand = " "
        

    }
    updateDisplay(){
        this.currentText.innerText=this.getDisplayNumber(this.currentOperand)
        if(this.operand != null){
            this.previousText.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operand}`
            
        }else{
            this.previousText.innerText = " "
        }
        }
    
}








const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearButton = document.querySelector("[data-all-clear]")
const previousText = document.querySelector("[data-previous-operand]")
const currentText= document.querySelector("[data-current-operand]")


const calculator= new Calculator(previousText,currentText)

numberButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        console.log("woekign")
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalsButton.addEventListener("click",()=>{
    calculator.compute()
    calculator.updateDisplay()
    clearAfterCompute(button.innerText)

    
    
})



allClearButton.addEventListener("click",()=>{
    calculator.clear()
    calculator.updateDisplay()
})



deleteButton.addEventListener("click",()=>{
    calculator.delete()
    calculator.updateDisplay()
})

