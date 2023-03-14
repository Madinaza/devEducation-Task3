// 1. 2 daxil olan parametrlərin cəmini qaytaran funksiya yazın
function sumOfNum(a,b){
    return a+b;
}
// let num=sumOfNum(2,4);
// console.log(num)

// 2. Daxil olan parametrin “Tək” və yaxud “Cüt” olduğunu yoxlayıb boolean qaytaran funksiya yazın.

function evenOrOdd(a){
    return a%2==0?true:false
}
// let result=evenOrOdd(22);
// console.log(result)


// 3. Parametrlərdə “Ad” və “Soyad” qəbul edib aralarında boşluğ ilə qaytaran funksiya yazın.

    function nameAndSur(name,surname){
       if(isNaN(parseInt(name))&&isNaN(parseInt(surname))){
        if(typeof name==="string"&&typeof surname==="string"){
            return `${name} ${surname}`;
        }
        else{
            return "Ad ve soyad daxil edin"
        }
       }
       else{
        return "Sehv daxil olunub"
       }

}
// let nam=nameAndSur("madina","agazade");
// console.log(nam)

// 4. Daxil olan ədədin mənfi və yaxud müsbət olduğunu yoxlayıb boolean qaytaran funksiya yazın.

function positiveOrNegative(a){
    return a>0?true:false
}
// 5. Parametrdən daxil olan ədədin faktorialını qaytaran funksiya yaradın.

function factorial(a){
    let num=1;
    for (let i = 1; i <=a; i++) {
   num*=i; 
    }
    console.log(num);
}
factorial(5);


// 6. Parametrlərdən gələn intervalda yerləşən ədədləri funksiya ilə console çıxardın. (rekursiya)
function betweenNum(a,b){
if(a>b){
    for (let i = b+1; i < a; i++) {
        console.log(i)        
    }
}
else{
    for (let i = a+1; i < b; i++) {  
        console.log(i)           
    }
}
}
betweenNum(40,35)

// 7. Parametrdə n ədədini qəbul edən və n-ci Fibonaççi sayını qaytaran funksiya yazın. (rekursiya)

function fibonici(a){
    let a1=0;
    let a2=1;
    let result;
    for (i = 0; i < a; i++) 
    {
        result=a1+a2;
        a1=a2;
        a2=result;
    }
    return a2;
}
