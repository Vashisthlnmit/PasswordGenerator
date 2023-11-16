let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");
let passlength=document.getElementById("passlength");
let Generate=document.getElementById("Generate");
let output=document.getElementById("output");
let passgenerate=()=>{
    let st="";
    if(passlength.value==0){
        window.alert("please select the length of password")
    }
    if(lowercase.checked){
        st+="abcdefghijklmnopqrstuvwxyz";
    }
    if(number.checked){
        st+="123456789";
    }
    if(uppercase.checked){
        st+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(symbol.checked){
        st+="!@#$%^&*(";
    }
    if(st.length==0){
        window.alert("No Condition is selected for generating password")
    }
    else{
        let d="";
        let z=st.length;
        for(let i=0;i<passlength.value;i++){
            let y=Math.floor((Math.random())*z);
            d+=st.charAt(y);
        }
        output.value=d;
    }
}
let copy=()=>{
    navigator.clipboard.writeText(output.value);
    window.alert("the text copied");
}