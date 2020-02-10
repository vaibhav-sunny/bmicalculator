document.getElementById('output').style.visibility='hidden';

    document.getElementById('formhidden').style.display='none';

    document.getElementById('normalCard').style.display='none';
    document.getElementById('underCard').style.display='none';
    document.getElementById('overCard').style.display='none';
    document.getElementById('obeseCard').style.display='none';



    function hidecms(){
        document.getElementById('formhidden').style.display='block';
    }

    function resetcards(){
        document.getElementById('normalCard').style.display='none';
        document.getElementById('underCard').style.display='none';
        document.getElementById('overCard').style.display='none';
        document.getElementById('obeseCard').style.display='none';
        document.getElementById('output').style.display='none';
    }
    
    function enter(){
        var a = parseFloat(document.getElementById('ftinput').value);
        var b = parseFloat(document.getElementById('ininput').value);
        var c = (((a*12)+b)*2.54);
        console.log(c)
        document.getElementById("cmsoutput").innerHTML = c;
        
    }


function calc(){
    document.getElementById('output').style.visibility='visible';
    var ht = parseFloat(document.getElementById('htinput').value);
    console.log(ht);
    var wt = parseFloat(document.getElementById('wtinput').value);
    var result = wt/((ht*0.01)**2);
    var result2 = result;
    document.getElementById("bmioutput").innerHTML = result;
    document.getElementById('output').style.display='block';
    //var result2 = result;
    console.log(result2);
    
    
    if(result2 <=18.4){
        document.getElementById("underOutput").innerHTML = "Underweight";
        document.getElementById('underCard').style.display='block';

        document.getElementById('normalCard').style.display='none';
        document.getElementById('overCard').style.display='none';
        document.getElementById('obeseCard').style.display='none';
    }
    else if(18.4<result2 && result2<=25){
          
        document.getElementById("normalOutput").innerHTML = "Normal";
        document.getElementById('normalCard').style.display='block';  
        console.log("normal");
        console.log("upto here");
        document.getElementById('underCard').style.display='none';
        document.getElementById('overCard').style.display='none';
        document.getElementById('obeseCard').style.display='none';
    }

    else if(25<result2 && result2<=30){
          
        console.log("upto here2");
          document.getElementById("overOutput").innerHTML = "Overweight";
          document.getElementById('overCard').style.display='block';  
          console.log("overweight");
          console.log("upto here");
          document.getElementById('normalCard').style.display='none';
          document.getElementById('underCard').style.display='none';
          document.getElementById('obeseCard').style.display='none';
    }
      
    
    else {
        document.getElementById("obeseOuput").innerHTML = "Obese";
        document.getElementById('obeseCard').style.display='block';

        document.getElementById('normalCard').style.display='none';
        document.getElementById('underCard').style.display='none';
        document.getElementById('overCard').style.display='none';
    }


}
