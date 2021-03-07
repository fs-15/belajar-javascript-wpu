/*  

 JURAGAN ANGKOT

    1-4 dan 6 beroprasi
    7, 9, tidak beroprasi
    5, 8, 10 lembur

*/



var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroprasi = 5;

for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ){
      
     if ( noAngkot <= 6 && noAngkot !== 5) { // noangkot 6 dan noangkot tidak sama dengan 5
       console.log('Agkot No. ' + noAngkot + ' sedang beroprasi');
      
      }
        else if(noAngkot === 8 || noAngkot === 10 ||  noAngkot === 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');

      } else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
      
      }

    }

