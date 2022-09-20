function processConfirm(ansewer) {
    let result ;
    if (ansewer){
        result = "Excellent. We'll play a nice game of chess.";
    }else {
        result = "may be later then. ";
    }
    return result;
    }
    let  confirmAnswer = confirm("shall we play a game");
    let  theAnswer = processConfirm(confirmAnswer);
    alert(theAnswer);