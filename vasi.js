var c3 = 0;
var c5 = 0;
var c52 = 0;

function svuota(vaso){
    if(vaso === "c3"){
        c3 = 0
    }else if(vaso === "c5"){
        c5 = 0
    }
}

function riempi(vaso){
    if(vaso === "c3"){
        c3 = 3;
    }else if(vaso === "c5"){
        c5 = 5;
    }
}

function travasa(vaso){
    if(vaso ==="c3"){
        c5 += c3;
        if(c5>5){
            while(c5>5){
                c5--;
            }
            c52 = c5-c3     
            c3 = c3-c52
        }else{
            c3 = 0
        }
    }
    if(vaso ==="c5"){
        c3 += c5;
        if(c3>3){
            while(c3>3){
                c3--
            }
        }
        c5 = 0
    }
}

riempi("c3");
travasa("c3");
riempi("c3");
travasa("c3");
svuota("c5");
travasa("c3");
riempi("c3");
travasa("c3");
console.log(c5, c3); //Output 4 0