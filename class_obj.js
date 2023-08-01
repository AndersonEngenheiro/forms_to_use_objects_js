// Class

class Fone {
    constructor(color = 'black'){
        this.color = color;
        this.isOn = true;
    }

    toggleOnOff(){
        if (this.isOn){
            console.log('desligar')
        } else{
            console.log('ligar')
        }
        this.isOn = !this.isOn;
    }
}

const fone1 = new Fone('white')
console.log(fone1)

const fone2 = new Fone()
console.log(fone2)

const fone3 = new Fone().toggleOnOff()
// console.log(fone3)
const fone4 = new Fone().toggleOnOff()
