/*  

 JURAGAN ANGKOT

    1-6 beroprasi
    7, 9, 10 tidak beroprasi
    8 lembur

*/



var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroprasi = 6;

    for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ){
      
     if ( noAngkot <= 6 ) {
       console.log('Angkot No. ' + noAngkot + ' sedang beroprasi');
      }else if( noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur');
      }else {
      console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
  
      }

    }     





