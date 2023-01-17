

// otaga lazim olan boya miqdarinin hesablanmasi

const roomSpace = () => {
    const space = prompt(`UZUNLUQ-EN-HUNDURLUK-QAPIPENCERESAYI
OLCULER ARASINDA "-" ISHARESINDEN ISTIFADE ET
DAXIL EDILEN ARTIQ ELEMENTLER NEZERE ALINMAYACAQ`)

const arrSpace = space.split("-")

let check = true;


console.log("DAXIL EDILEN ELEMENTLER: ",space.split("-"))


for(let i = 0;i<arrSpace.length;i++){
    arrSpace[i] = Number(arrSpace[i])
  
    }


// elementlerin eded olmasinin yoxlanmasi

if(!arrSpace.every((value) =>{ 
    return !(isNaN(value))})
){

   window.alert(`EDED DAXIL EDILMEDI`)
    check *= false;
}
else {
    console.log("CEVRILMISH MASSIV: ",arrSpace)
}


// otagin sahesinin VE LAZIM OLAN BOYA MIQDARININ hesablanmasi


if(check){

   
  

    
    let roomSpace =  arrSpace.slice(0,3).reduce((total,value) => {
        return total * value 
    }) - arrSpace[3]*2

    console.log("OTAGIN SAHESI:  ",roomSpace, "KV METR")
    if(roomSpace >0){
        console.log(`DAXIL EDILEN QAPI-PENCERENIN HER BIRI  2 KV METR HESABLANIR
        HER 5 KV METR SAHEYE 1 LITR BOYA ISTIFADE OLUNUR
        MASSIVE DAXIL EDILEN ILK 4 EDED NEZERE ALINIR
        
        `);
        
        let paint = Math.ceil(roomSpace/5);
        console.log(`LAZIM OLAN BOYA HECMI: ${paint} LITR`)
        window.alert(`LAZIM OLAN BOYA HECMI: ${paint} LITR`)
    
    }else{
        window.alert("SAHE MENFI OLA BILMEZ")
    }

 

}
}
 
// roomSpace()




// mehsula endirim edilmesi
let price = prompt("MEHSULUN CARI QIYMETINI DAXIL ET")
console.log("DAXIL EDILEN QIYMET : ", price)
 price = Number(price);
let discount = prompt("ENDIRIM FAIZINI DAXIL ET")
console.log(("daxil edilen endirim faizi:  ").toUpperCase(),discount,"%")
discount = Number(discount);
let beginDateString = prompt(`ENDIRIMIN BASHLANMA TARIXI
IL-AY-GUN
`);
let beginDate = new Date(beginDateString);
let endDateString = prompt(`ENDIRIMIN BITME TARIXI
IL-AY-GUN
`);
let endDate = new Date(endDateString);

let currenDate = new Date();

console.log(`
CARI VAXT:                   ${currenDate.toDateString()}
ENDIRIMIN BASHLANMA TARIXI:  ${beginDate.toDateString()}
ENDIRIMIN SONA CATMA TARIXI: ${endDate.toDateString()}
`)






let msecBeginDate = Date.parse(beginDate);
// console.log(msecBeginDate)

let msecEndDate = Date.parse(endDate);
// console.log(msecEndDate)

let msecCurrentdate = Date.now();
// console.log(msecCurrentdate)

// TARIXLERIN YOXLANILMASI

if(msecBeginDate < msecCurrentdate){
    window.alert(("endirim kecmis tarixden baslaya bilmez").toUpperCase())
}
else if(msecBeginDate >= msecEndDate){
    window.alert(("endirim muddeti menfi ola bilmez").toUpperCase())
}
else if(isNaN(price) == true){
    window.alert("QIYMET DUZGUN FORMATDA DEYIL").toUpperCase()
}
else{
 let discountDay =(msecEndDate - msecBeginDate)/1000/60/60/24;
 let resudieDay = Math.floor((msecBeginDate - msecCurrentdate)/1000/60/60/24);

console.log(("endirim muddeti:  ").toUpperCase(),discountDay, "  gun");

console.log(`ENDIRIMLERE ${resudieDay} GUN QALDI`);

console.log(`
MEHSULUN CARI QIYMETI: ${price}
ENDIRILMISH QIYMET:    ${(price -= Math.floor(price*discount/100))}
`)





}