function validate()
{
    /* name validation */
    var nlen=document.vform.nm.value.length;
    if(nlen<2)
    {
        /* alert("Invalid")
        return false */
       
        /* const para = document.createElement("output");
        para.innerText = "Enter more than 1 character";
        document.body.appendChild(para);
        return false */
        document.vform.no.innerHTML="Enter more than 1 character"
        return false
    }

    /*  phone no validation */
    var phlen=document.vform.phn.value.length
    if(phlen!=10)
    {
        document.vform.phno.innerHTML="Enter 10 digits"
        return false
    }

    /* password validation 
    var psw=document.vform.pass.value;
    var p=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!(psw.match(p)))
    {
        document.vform.passo.innerHTML="Invalid"
        return false
    }*/

    /* confirm password validation 
    var cpsw=document.vform.cpass.value;
    if(cpsw!=psw)
    {
        document.vform.cpasso.innerHTML="Password doesn't match"
        return false
    }*/

    /* radio button validation */
    var gen1=document.vform.gen[0].checked;
    var gen2=document.vform.gen[1].checked;
    if(gen1==false && gen2==false)
    {
        document.vform.geno.innerHTML="Choose atleast one gender"
        return false
    }
}


