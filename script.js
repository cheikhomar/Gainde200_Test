  var currentTab = 0; 
  showTab(currentTab); 
  
  function showTab(n) {
    // cette fonction montre l'etape correspondante
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
  
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    // a la derniere etape du formulaire, on affiche le button submit sinon le bouton est Next 
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
   
    fixStepIndicator(n)
    
  }
  
  function nextPrev(n) {
      var elem = document.getElementById("myBar");
   
    var x = document.getElementsByClassName("tab");
    // sortir de la fonction si un champs est invalide:
    if (n == 1 && !validateForm()) return false;
    // cacher l'etape actuelle:
    x[currentTab].style.display = "none";
    // incrementer ou decrementer l'index de l'etape du formulaire:
    currentTab = currentTab + n;
    // si on atteint la fin du formulaire..
    if (currentTab >= x.length) {
      // ... on soumet le formulaire
      document.getElementById("regForm").submit();
      return false;
    }
  
    // montrer l'etape 
    showTab(currentTab);
  
    //si on est à la premierepage..
    if(currentTab==1)
    {
      //l'indicateur en haut de la page est rempli à 50%
      elem.style.width = 50 + "%";
      
    }
    if(currentTab==2){
      elem.style.width = 75 + "%";
    }
    if(currentTab==3){
      elem.style.width = 100 + "%";
      
    }
   
  
  }
  
  function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
   
    for (i = 0; i < y.length; i++) {
      // si un champs est vide
      if (y[i].value == "") {
        
        y[i].className += " invalid";
        
        valid = false;
      }
    }
    
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; 
  }
  
  function fixStepIndicator(n) {
  
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    
    x[n].className += " active";
  }
