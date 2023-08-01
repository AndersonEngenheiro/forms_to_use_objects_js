// prototypes
function Microf (color = 'black') {
    this.color  = color;
    this.isOn = true;
}

Microf.prototype.toggleOnOff = function () {
    if(this.isOn){
        console.log('desligar')
    } else{
        console.log('ligar')
    }
    this.isOn = !this.isOn;
};

const micro1 = new Microf()
const micro2 = new Microf('green')

micro2.toggleOnOff()
micro1.toggleOnOff()
micro2.toggleOnOff()
micro1.toggleOnOff()

console.log(micro1)
console.log(micro2)


