// factory_function

function createMicrofone(color = 'black'){
    let isOn = true;

    function toggleOnOff(){
        if(isOn){
            console.log('desligar')
        } else{
            console.log('ligar')
        }
        isOn = !isOn;
    }

    return{ color, toggleOnOff };
}

const microfone = createMicrofone('white')
const microfone2 = createMicrofone()

console.log(microfone2.color)