function dish(){
    const myes = document.getElementById("myes");
    const mno = document.getElementById("mno");
    const lyes = document.getElementById("lyes");
    const lno = document.getElementById("lno");

    let recom;

    if(!myes.checked && !mno.checked || !lyes.checked && !lno.checked){
        document.getElementById("res").value = "Please Select your answer";
        return;
    }

    if(myes.checked && lyes.checked){
        recom = "We recommend the shawarma";
    }
    else if(mno.checked && lno.checked){
        recom = "We recommend some hummus or labneh with pita bread";
    }
    else if(mno.checked && lyes.checked){
        recom = "We recommend the tabbouleh";
    }
    else{
        recom = "We recommend the manakesh with zaatar/cheese topping";

    }

    document.getElementById("res").value = recom;
}