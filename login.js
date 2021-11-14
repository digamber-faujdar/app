function validateform(){  
    var user=document.getElementById("user")  
    var pass=document.getElementById("pass").value;  
      
    if (user.value==null || user.value==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(pass.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }
    