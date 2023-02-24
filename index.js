countH = 0
countG = 0
function add1h(){
    countH +=1
    document.getElementById("score1-el").textContent = countH
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}
function add2h(){
    countH +=2
    document.getElementById("score1-el").textContent = countH
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}
function add3h(){
    countH +=3
    document.getElementById("score1-el").textContent = countH
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}


function add1g(){
    countG +=1
    document.getElementById("score2-el").textContent = countG
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}
function add2g(){
    countG +=2
    document.getElementById("score2-el").textContent = countG
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}
function add3g(){
    countG +=3
    document.getElementById("score2-el").textContent = countG
    if(countH > countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 1"
    }
    else if(countH < countG){
        document.getElementById("lead-el").textContent = "Leader : TEAM 2"
    }
    else{
        document.getElementById("lead-el").textContent = "Leader : TIE"
    }
}

function reset(){
    countH = 0
    countG = 0
    document.getElementById("score1-el").textContent = countH
    document.getElementById("score2-el").textContent = countG
    document.getElementById("lead-el").textContent = "Leader :"
}
