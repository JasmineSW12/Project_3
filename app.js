let device;
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);

}

function failure(){
    console.log('could not connect MIDI');
}

function updateDevices(event){
    //console.log(event);
}

function success(midiAccess){
   // console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);
    const inputs = midiAccess.inputs;

    for (var output of midiAccess.outputs.values()) {
     device =  output;
     console.log('Output device selected', device);
    }
    inputs.forEach((input) => {
 
        input.addEventListener('midimessage', handleInput);
      })
    }

//console.log(inputs);

function color(key, clr) {
    device && device.send([0x90, key, clr]);
}

function clearAll() {
    for (let i = 0; i < 100; i++) {
        color(i, 0)
    }
}

function colorAll() {
    for (let i = 0; i < 100; i++) {
        color(i, i)
    }
}


function handleInput(input) {
    console.log(input);

     const command = input.data[0];
     const note = input.data[1];
     const velocity = input.data[2];
     //console.log(command);
     //console.log(note);
     //console.log(velocity);

     switch (command) {
         case 144:
        if (velocity > 0) {
            noteOn(note);
        } else {
            noteOff(note);
        }
        break;
       // case 128:
           // noteOff(note);
           // break;
     }
}


function noteOn(note) {
    console.log(`note:${note}//on`)
    if (note == 64){
     document.getElementById("grid-item-1").style.backgroundColor = "rgb(249, 151, 216)";
    }
    if (note == 65){
        document.getElementById("grid-item-2").style.backgroundColor = "rgb(208, 208, 239)";
    }
    if (note == 66){
        document.getElementById("grid-item-3").style.backgroundColor = "rgb(213, 250, 217)";
    }
    if (note == 67){
        document.getElementById("grid-item-4").style.backgroundColor = "rgb(248, 125, 206)";
    }
    if (note == 96){
        document.getElementById("grid-item-5").style.backgroundColor = "rgb(236, 254, 217)";
    }
    if (note == 97){
        document.getElementById("grid-item-6").style.backgroundColor = "rgb(192, 230, 247)";
    }
    if (note == 98){
        document.getElementById("grid-item-7").style.backgroundColor = "rgb(254, 245, 168)";
    }
    if (note == 99){
        document.getElementById("grid-item-8").style.backgroundColor = "rgb(181, 151, 217)";
    }
    if (note == 60){
        document.getElementById("grid-item-9").style.backgroundColor = "rgb(244, 158, 219)";
    }
    if (note == 61){
        document.getElementById("grid-item-10").style.backgroundColor = "rgb(215, 202, 237)";
    }
    if (note == 62){
        document.getElementById("grid-item-11").style.backgroundColor = "rgb(211, 243, 217)";
    }
    if (note == 63){
        document.getElementById("grid-item-12").style.backgroundColor = "rgb(219, 126, 199)";
    }
    if (note == 92){
        document.getElementById("grid-item-13").style.backgroundColor = "rgb(237, 245, 217)";
    }
    if (note == 93){
        document.getElementById("grid-item-14").style.backgroundColor = "rgb(179, 231, 222)";
    }
    if (note == 94){
        document.getElementById("grid-item-15").style.backgroundColor = "rgb(251, 241, 174)";
    }
    if (note == 95){
        document.getElementById("grid-item-16").style.backgroundColor = "rgb(169, 128, 186)";
    }
    if (note == 56){
        document.getElementById("grid-item-17").style.backgroundColor = "rgb(233, 173, 224)";    
    }
    if (note == 57){
        document.getElementById("grid-item-18").style.backgroundColor = "rgb(175, 165, 217)";    
    }
    if (note == 58){
        document.getElementById("grid-item-19").style.backgroundColor = "rgb(209, 237, 217)";    
    }
    if (note == 59){
        document.getElementById("grid-item-20").style.backgroundColor = "rgb(176, 128, 188)";    
    } 
    if (note == 88){
        document.getElementById("grid-item-21").style.backgroundColor = "rgb(238, 235, 217)";    
    }   
    if (note == 89){
        document.getElementById("grid-item-22").style.backgroundColor = "rgb(167, 206, 211)";    
    } 
    if (note == 90){
        document.getElementById("grid-item-23").style.backgroundColor = "rgb(244, 232, 187)";    
    } 
    if (note == 91){
        document.getElementById("grid-item-24").style.backgroundColor = "rgb(191, 128, 192)";    
    } 
    if (note == 52){
        document.getElementById("grid-item-25").style.backgroundColor = "rgb(228, 180, 227)";    
    }   
    if (note == 53){
        document.getElementById("grid-item-26").style.backgroundColor = "rgb(189, 209, 240)";    
    } 
    if (note == 54){
        document.getElementById("grid-item-27").style.backgroundColor = "rgb(205, 224, 217)";    
    } 
    if (note == 55){
        document.getElementById("grid-item-28").style.backgroundColor = "rgb(219, 126, 199)";    
    } 
    if (note == 84){
        document.getElementById("grid-item-29").style.backgroundColor = "rgb(240, 226, 217)";    
    }   
    if (note == 85){
        document.getElementById("grid-item-30").style.backgroundColor = "rgb(162, 193, 205)";    
    } 
    if (note == 86){
        document.getElementById("grid-item-31").style.backgroundColor = "rgb(237, 224, 199)";    
    } 
    if (note == 87){
        document.getElementById("grid-item-32").style.backgroundColor = "rgb(183, 175, 212)";    
    } 
    if (note == 48){
        document.getElementById("grid-item-33").style.backgroundColor = "rgb(223, 187, 230)";    
    }   
    if (note == 49){
        document.getElementById("grid-item-34").style.backgroundColor = "rgb(244, 244, 216)";    
    } 
    if (note == 50){
        document.getElementById("grid-item-35").style.backgroundColor = "rgb(198, 204, 217)";    
    } 
    if (note == 51){
        document.getElementById("grid-item-36").style.backgroundColor = "rgb(233, 173, 224)";    
    } 
    if (note == 80){
        document.getElementById("grid-item-37").style.backgroundColor = "rgb(242, 207, 217)";    
    }   
    if (note == 81){
        document.getElementById("grid-item-38").style.backgroundColor = "rgb(153, 174, 197)";    
    } 
    if (note == 82){
        document.getElementById("grid-item-39").style.backgroundColor = "rgb(234, 220, 205)";    
    } 
    if (note == 83){
        document.getElementById("grid-item-40").style.backgroundColor = "rgb(203, 225, 215)";    
    }
    if (note == 44){
        document.getElementById("grid-item-41").style.backgroundColor = "rgb(218, 194, 233)";    
    }   
    if (note == 45){
        document.getElementById("grid-item-42").style.backgroundColor = "rgb(175, 165, 217)";    
    } 
    if (note == 46){
        document.getElementById("grid-item-43").style.backgroundColor = "rgb(194, 190, 217)";    
    } 
    if (note == 47){
        document.getElementById("grid-item-44").style.backgroundColor = "rgb(208, 208, 239)";    
    } 
    if (note == 76){
        document.getElementById("grid-item-45").style.backgroundColor = "rgb(244, 188, 216)";    
    }   
    if (note == 77){
        document.getElementById("grid-item-46").style.backgroundColor = "rgb(145, 155, 188)";    
    } 
    if (note == 78){
        document.getElementById("grid-item-47").style.backgroundColor = "rgb(216, 202, 208)";    
    } 
    if (note == 79){
        document.getElementById("grid-item-48").style.backgroundColor = "rgb(241, 217, 217)";    
    } 
    if (note == 40){
        document.getElementById("grid-item-49").style.backgroundColor = "rgb(213, 201, 236)";    
    }   
    if (note == 41){
        document.getElementById("grid-item-50").style.backgroundColor = "rgb(224, 207, 224)";    
    } 
    if (note == 42){
        document.getElementById("grid-item-51").style.backgroundColor = "rgb(190, 190, 217)";    
    } 
    if (note == 43){
        document.getElementById("grid-item-52").style.backgroundColor = "rgb(212, 127, 197)";    
    }
    if (note == 72){
        document.getElementById("grid-item-53").style.backgroundColor = "rgb(248, 160, 216)";    
    }   
    if (note == 73){
        document.getElementById("grid-item-54").style.backgroundColor = "rgb(136, 136, 180)";    
    } 
    if (note == 74){
        document.getElementById("grid-item-55").style.backgroundColor = "rgb(247, 224, 208)";    
    } 
    if (note == 75){
        document.getElementById("grid-item-56").style.backgroundColor = "rgb(243, 198, 216)";    
    }
    if (note == 36){
        document.getElementById("grid-item-57").style.backgroundColor = "rgb(208, 208, 239)";    
    }   
    if (note == 37){
        document.getElementById("grid-item-58").style.backgroundColor = "rgb(192, 230, 247)";       
    } 
    if (note == 38){
    document.getElementById("grid-item-59").style.backgroundColor = "rgb(181, 151, 217)";       
    } 
    if (note == 39){
        document.getElementById("grid-item-60").style.backgroundColor = "rgb(244, 188, 216)";       
    }
    if (note == 68){
        document.getElementById("grid-item-61").style.backgroundColor = "rgb(228, 180, 227)";       
    } 
    if (note == 69){
        document.getElementById("grid-item-62").style.backgroundColor = "rgb(119, 119, 165)";       
    }     
    if (note == 70){
        document.getElementById("grid-item-63").style.backgroundColor = "rgb(220, 203, 230)";       
    } 
    if (note == 71){
        document.getElementById("grid-item-64").style.backgroundColor = "rgb(247, 170, 216)";       
    } 
}




function noteOff(note) {
    console.log(`note:${note}//off`)
}
