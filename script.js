//loop for executing main function 10 times.
function loop(){
  var f=0;
  while(f!==10){
    myFunction();
    f++;
  }
}

// main function-Heart of the code.To check and solve each cell by considering their corresponding squares,rows and columns.
function myFunction(){
  var row1=[],row2=[],row3=[],row4=[],row5=[],row6=[],row7=[],row8=[],row9=[],col1=[],col2=[],col3=[],col4=[],col5=[],col6=[],col7=[],col8=[],col9=[];

  var crow1=document.getElementsByClassName('row1'),crow2=document.getElementsByClassName('row2'),crow3=document.getElementsByClassName('row3'),crow4=document.getElementsByClassName('row4'),crow5=document.getElementsByClassName('row5'),crow6=document.getElementsByClassName('row6'),crow7=document.getElementsByClassName('row7'),crow8=document.getElementsByClassName('row8'),crow9=document.getElementsByClassName('row9');

  var ccol1=document.getElementsByClassName('col1'),ccol2=document.getElementsByClassName('col2'),ccol3=document.getElementsByClassName('col3'),ccol4=document.getElementsByClassName('col4'),ccol5=document.getElementsByClassName('col5'),ccol6=document.getElementsByClassName('col6'),ccol7=document.getElementsByClassName('col7'),ccol8=document.getElementsByClassName('col8'),ccol9=document.getElementsByClassName('col9');

  for(var i=0;i<9;i++){
    row1.push(crow1[i].value);row2.push(crow2[i].value);row3.push(crow3[i].value);row4.push(crow4[i].value);row5.push(crow5[i].value);row6.push(crow6[i].value);row7.push(crow7[i].value);row8.push(crow8[i].value);row9.push(crow9[i].value);
  }    

  for(var i=0;i<9;i++){
    col1.push(ccol1[i].value);col2.push(ccol2[i].value);col3.push(ccol3[i].value);col4.push(ccol4[i].value);col5.push(ccol5[i].value);col6.push(ccol6[i].value);col7.push(ccol7[i].value);col8.push(ccol8[i].value);col9.push(ccol9[i].value);
  } 

  var rows={row1:row1,row2:row2,row3:row3,row4:row4,row5:row5,row6:row6,row7:row7,row8:row8,row9:row9};
  var column={col1:col1,col2:col2,col3:col3,col4:col4,col5:col5,col6:col6,col7:col7,col8:col8,col9:col9};

  var tarr=[];
  var elem=document.getElementsByClassName('box');
  for(var i=0;i<elem.length;i++){
    var child=elem[i];
    for(var p=0;p<child.children.length;p++){
      tarr.push(child.children[p].value);
    }
  }
  var sqr1=tarr.slice(0,9),sqr2=tarr.slice(9,18),sqr3=tarr.slice(18,27),sqr4=tarr.slice(27,36),sqr5=tarr.slice(36,45),sqr6=tarr.slice(45,54),sqr7=tarr.slice(54,63),sqr8=tarr.slice(63,72),sqr9=tarr.slice(72,81);

  var square={sqr1:sqr1,sqr2:sqr2,sqr3:sqr3,sqr4:sqr4,sqr5:sqr5,sqr6:sqr6,sqr7:sqr7,sqr8:sqr8,sqr9:sqr9};

  function checkin(checkarr,value){
    var x=0;
    function checksum(val){
      return val==value;
    }
   for(var i=0;i<checkarr.length;i++){
    var newarr=checkarr[i].filter(checksum);
    if(newarr.length===1){
      x++;
    }
   }
   return x;
  }

  // highlight if there are 2 or more elements in row,square or column.
  var cells=document.getElementsByTagName('INPUT');
  for(var q=0;q<cells.length;q++){
    var inelem=cells[q];
    var getclass=inelem.className;
    var classarr=getclass.split(' ');
    var temarr=[rows[classarr[0]],column[classarr[1]],square[classarr[2]]];

    if(inelem.value.length>0 && checkin(temarr,inelem.value)!==3){
        inelem.style.backgroundColor='red';
        inelem.style.color='white';
    }
  }  

  //Check and solve.
  var solvearr=[rows,column,square];  
  function solution(){
    for(var n=0;n<solvearr.length;n++){
      for(var each in solvearr[n]){
        var element=document.getElementsByClassName(each);
        var cntforrow=0;
        var prarrrow=[];
        var toarrrow=[];
        for(var a=0;a<element.length;a++){
          if(element[a].value.length===1){
            prarrrow.push(element[a].value);
          }
        }

        for(var b=1;b<=9;b++){
          if(prarrrow.indexOf(b.toString())===-1){
            toarrrow.push(b.toString());
          }
        }

        for(var c=0;c<toarrrow.length;c++){
          for(var d=0;d<element.length;d++){
            if(element[d].value.length==0){
              var rowcname=element[d].className;
              var rowcarr=rowcname.split(' ');
              if(rows[rowcarr[0]].indexOf(toarrrow[c])==-1 && column[rowcarr[1]].indexOf(toarrrow[c])==-1 && square[rowcarr[2]].indexOf(toarrrow[c])==-1){
                cntforrow++;
              }
            }
          }
          if(cntforrow===1){
            for(var e=0;e<element.length;e++){
              if(element[e].value.length==0){
                var rowcnames=element[e].className;
                var rowcarrs=rowcnames.split(' ');
                if(rows[rowcarrs[0]].indexOf(toarrrow[c])==-1 && column[rowcarrs[1]].indexOf(toarrrow[c])==-1 && square[rowcarrs[2]].indexOf(toarrrow[c])==-1){
                  element[e].value=toarrrow[c];
                  element[e].style.backgroundColor='#3399ff';
                  element[e].style.color='white';
                }
              }
            }
          }
          cntforrow=0;
        }
      }
    }
  }
  solution();
}
