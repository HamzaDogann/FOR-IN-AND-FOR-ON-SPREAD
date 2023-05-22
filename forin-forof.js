let names = ["Enes","Hamza","Okan","Hasan"];

// names.forEach(function(name){
//     console.log(name);
// })

// names.forEach(name=>console.log(name));  //! Yukarda ki kod parçacıgının aynısını yapmış olduk.


//!FOR-İN döngüsü

for(let name in names){   // in olduğu zaman "inDEXLERİ verir." 0 - 1 - 2 - 3 diye gider.
    console.log(name, names[name]);  // names[0] ya burada da names[name] for döndükçe artan sayı işte
}


//!FOR-OF döngüsü

for(let isim of names){   //  "OF" Belirtdiğimiz dizinin içindeki elemanları(Değerleri) verir.
    console.log(isim , names.indexOf(isim));  
}
