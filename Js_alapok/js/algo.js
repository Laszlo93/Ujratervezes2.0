// PSZEUDOKÓD

/*
kávéfőző bekapcsolása
if nincs elég kávé then
    kávé hozzáadása
endif
if nincs elég víz then
    víz hozzáadása
endif
while nem melegedett fel
    10 mp várakozás
endwhile
csésze odahelyezése
gomb megnyomása
*/


//ELEMI ALGORITMUSOK

/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = kövezkező elem
    összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for(let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

/*
Számlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0;
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) {
        db++
    }
}
console.log("Even numbers: ", db);

/*
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let largestItem = numericArray[0];
for(let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] > largestItem) {
        largestItem = numericArray[i];
    }
}
console.log("The biggest element: ", largestItem);

/*
Eldöntés tétele (algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let contains = false;
for (let i = 0; i < numericArray.length && !contains; i++) {
    if(numericArray[i] == 15) {
        contains = true;
    }  
}
console.log("This array contains 5: ", contains);