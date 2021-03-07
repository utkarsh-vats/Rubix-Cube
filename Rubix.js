

// Setting up Cube
let dim = 3;
let cube = new Array(dim);
for(let i = 0; i < dim; i++){
    cube[i] = new Array(dim);
}
for(let i = 0; i < dim; i++){
    for(let j = 0; j < dim; j++){
        cube[i][j] = new Array(dim);
    }
}


// Colors
// UPP, DWN, RGT, LFT, FRT, BCK
let colors = new Array(6);
const UPP = 0;
const DWN = 1;
const LFT = 2;
const RGT = 3;
const FRT = 4;
const BCK = 5;


function setup(){
    createCanvas(600, 600, WEBGL);
    createEasyCam();
    document.oncontextmenu = () => {
        return false;
    }
        
    // Colors
    // colors[DWN] = color(255, 255, 0);
    colors[DWN] = color("#ffd500");
    colors[UPP] = color(255);
    // colors[RGT] = color(255, 0, 0);
    colors[RGT] = color("#b90000");
    // colors[LFT] = color(255, 181, 0);
    colors[LFT] = color("#ff5900");
    // colors[FRT] = color(0, 255, 0);
    colors[FRT] = color("#009b48");
    // colors[BCK] = color(0, 0, 255);
    colors[BCK] = color("#0045ad");

    // Initialising Cube
    for(let i = 0; i < dim; i++){
        for(let j = 0; j < dim; j++){
            for(let k = 0; k < dim; k++){
                let len = 60;
                let offSet = (dim - 1) * len * 0.5;
                let x = len * i - offSet;
                let y = len * j - offSet;
                let z = len * k - offSet;
                cube[i][j][k] = new Cubie(x, y, z, len);
            }
        }
    }
}

function draw(){
    // background("rgba(191, 191, 191, 1)");
    background(41);
    for(let i = 0; i < dim; i++){
        for(let j = 0; j < dim; j++){
            for(let k = 0; k < dim; k++){
                cube[i][j][k].show();
            }
        }
    }
}