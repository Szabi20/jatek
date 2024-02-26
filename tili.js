var nrow = 5;
  var ncell = 5;
  var tt  = new Array(nrow);
  var newrow;
  
  for(var i=0;i<nrow;i++){
    newrow=document.getElementById("puzzle").insertRow(i);
    tt[i] = new Array(ncell);
    for(var j=0;j<ncell;j++){
        tt[i][j]=newrow.insertCell(j);
        tt[i][j].id=i*ncell+j;
        tt[i][j].onclick=function(){mystep(this);};
        tt[i][j].style.width="50px";
        tt[i][j].style.height="50px";
        tt[i][j].style.color="	# 4B0082";
        tt[i][j].style.background="#800080";
        tt[i][j].innerHTML=parseInt(tt[i][j].id)+1;
        // A JS 0-tol szamolja a tombelemeket, de a puzzle 1-tol!
      }
      
  }
  
  // ============ Ures cella az utolso helyre
  var empty=nrow*ncell-1;
  document.getElementById(empty.toString()).style.background="#d0d0d0";
  document.getElementById(empty.toString()).innerHTML="";
	
  //Lepesek kezelese
  function mystep(obj){
	
    
    var nid = parseInt(obj.id);
    var nempty = parseInt(empty);

      if (nid+ncell==nempty|| nid-ncell==nempty ||
         nid+1==nempty && nempty%ncell!=0||
         nid-1==nempty && nid%ncell!=0){
		 
         document.getElementById(empty.toString()).innerHTML = document.getElementById(obj.id).innerHTML;
         document.getElementById(empty.toString()).style.background = document.getElementById(obj.id).style.background;
         document.getElementById(obj.id).style.background="#d0d0d0";
         document.getElementById(obj.id).innerHTML="";
         empty=obj.id;
      }
  }
	
  // ============ Cellakevero
  function shuffle(){
    var xwalker;
    var ywalker;
    for(var i=0;i<nrow*ncell*6;i++){
      rowwalker=Math.floor(empty/ncell);
      cellwalker=empty%ncell;
	
      switch(Math.floor(Math.random()*4)) {
        case 0: 
          cellwalker+=(cellwalker<ncell-1)?1:-1;
          break;
        case 1: 
          cellwalker+=(cellwalker>0)?-1:1;
          break;
        case 2: 
          rowwalker+=(rowwalker<nrow-1)?1:-1;
          break;
        case 3: 
          rowwalker+=(rowwalker>0)?-1:1;
          break;
      }
      
      mystep(document.getElementById((rowwalker*ncell+cellwalker).toString()));
    }
  }
   // Egérkattintások számlálása
   let clickCount = 0;
   const clickCounter = document.getElementById('clickCounter');
 
   function incrementCounter() {
     clickCount++;
     clickCounter.textContent = 'Egérkattintások száma: ' + clickCount;
     
   }
 
   // Gomb eseményfigyelő hozzáadása
   const clickButton = document.getElementById('clickButton');
   clickButton.addEventListener('click', incrementCounter);
   // Nullázás gomb eseményfigyelő hozzáadása
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
    clickCount = 0;
    clickCounter.textContent = 'Egérkattintások száma: ' + clickCount;
  });




  