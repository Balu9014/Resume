while(true){
    var a=parseInt(prompt("Enter the first number"));
    var b=parseInt(prompt("Enter the second number"));
    var op=prompt("Enter the operator");
    
    if(op.toLowerCase()==='exit'){
        document.getElementById('output').innerHTML+='calculator is closed' +'<br>';
       break;
    }
    var res;
    if(op==='+'){
      res=a+b;
    }
    else if(op==='-'){
      res=a-b;
    }
    else if(op==='*'){
      res=a*b;
    }
    else if(op==='/'){
      res=a/b;
    }
    else {
      res='Invalid operator';
    }
        document.getElementById('output').innerHTML+='output is ' +res+'<br>';
    
    }