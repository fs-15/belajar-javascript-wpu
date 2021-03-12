/*

LINK YOUTUBE
https://www.youtube.com/watch?v=Mmf3SXHifBw&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=26 

Membuat game suwit jawa dengan javascript
*/




var tanya = true;
while ( tanya ){

    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, ular');

    // menangkap pilihan komputer
    // menangkap plihan 
    var comp = Math.random();


    if(comp < 0.34 ){
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = 'ular';
    } else {
        comp = 'semut';
    }
        

    var hasil = '';
    // menentukan rules
    if( p == comp ){
        hasil = 'SERI!';
    } else if ( p == 'gajah'){
        // if( comp == 'ular'){
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }

        hasil = ( comp = 'ular' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'ular'){
        // if( comp == 'gajah'){
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG;'
        // }
        hasil = ( comp = 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if ( p == 'semut'){

        hasil = (comp == 'ular') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = ' memasukkan pilihan yang salah!!!'
    }


    // tampilkan hasilnya
    alert('Kamu memilih ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);


    tanya = confirm('Main Lagi?');
}

alert ('Terimakasih Sudah Bermain.')
