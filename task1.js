var stor=require("readline-sync")

var score=0

function quiz(question,answer)   {
    console.log(i+1+".  " + question,"\n")
    var ans=stor.question(i+1+".  " +"ans ==>> ")
    if (answer==ans){
        console.log("right");
        score = score + 1
    }
    else{
        console.log("wrong");
    }

    console.log("your score is ",score)

    console.log(".........********............");
}


let data=[{
    question:"what is your name?",
    answer:"madhukar"
},{
    question:"how old am i?",
    answer:"18"
},{
    question:" What is your biggest fear?",
    answer:"being hungry"
},{
    question:"What is your favorite book to read?",
    answer:"rich dad poor dad"
},{

    question:"what is your fav hero?",
    answer:"my self"
}]

console.log("how much do you know me ??");
for (var i = 0;i<data.length;i = i+ 1){
    quiz(data[i].question,data[i].answer)
}