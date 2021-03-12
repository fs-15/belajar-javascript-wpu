/*
LINK YOUTUBE
https://www.youtube.com/watch?v=Mmf3SXHifBw&list=PLFIM0718LjIWXagluzROrA-iBY9eeUt4w&index=26 
*/




// Game Tebak Angka //




var tanya = true;
//     while ( tanya ){

        // mendapat angka random pilihan player
        var angkaRandom = Math.floor(Math.random() * 10);
        var kesempatan = 2;
        alert('Selamat Datang di GAME TEBAK ANGKA \n \n \n Silahkan masukkan angka dari 1-10! \n kamu punya tiga  kesempatan');
        
        while (kesempatan >= 0) {
            var hooman = prompt('Masukkan angka tebakan');
            if (hooman == angkaRandom && kesempatan >= 0) {
                alert('Anda benar ! \n Angka yang dicari adalah ' +angkaRandom);
                kesempatan = 0;
            } else if (hooman < angkaRandom && kesempatan > 0) {
                alert('terlalu rendah \n ayo masih ada ' +kesempatan+ ' kesempatan');
            } else if (hooman > angkaRandom && kesempatan > 0) {
                alert('terlalu tinggi \n ayo masih ada ' +kesempatan+ ' kesempatan');
            } else if (kesempatan == 0 && hooman !== angkaRandom) {
                alert("kesempatan anda habis\n anda kalah, angka yang di cari adalah " +angkaRandom);
            }
                kesempatan -= 1;	
        }
        tanya = confirm('main lagi?');
        alert('Terimasih sudah bermain');










        
        // while (kesempatan => 0){
        //     var p = prompt('Masukkan angka tebakan');
        //     if (p == angkaRandom && kesempatan > 0){
        //         alert('Anda benar \n angka yang ada cari adalah ' + angkaRandom);
        //     } else if (p < angkaRandom && kesempatan > 0){
        //         alert('Telalu RENDAH \n masih ada ' +kesempatan+ 'kesempatan');
        //     } else if (p > angkaRandom && kesempatan > 0){
        //         alert(`Terlalu TINGGI masih ada ${kesempatan} kesempatan`);
        //     } else if(kesempatan == 0 && p !== angkaRandom){
        //         alert('Anda GAGAL!!! \n angka yang dicari adalah '+angkaRandom )
        //     }

        //     // tampilkan hasil
        //     console.log(alert);
        //     kesempatan -= 1;

          
    //     }
    //     tanya = confirm('Main Lagi?');
    // }
    //     alert ('Terimakasih Sudah Bermain.');
    // tanya = confirm('Main Lagi?');
    // alert ('Terimakasih Sudah Bermain.')
