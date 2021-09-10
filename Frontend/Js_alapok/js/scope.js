// Global scope
var globalName = "Joe";

function something() {
    var globalName = "Jack";
    console.log(globalName);
}
something();

console.log(globalName);

// let használata var helyett
    // a var változókat többször is definiálhatom blokkon belül
    var name = "Pisti";
    var name = "Julsci";
    // a let változókat blokkon belül csak egyszer lehet definiálni(memóriasporlás)
    let name = "Pisti";    
    let name = "Julcsi";    // ennél hibát fog kiírni    
    // ne használjuk ugyanazt a nevet változó definiálásakor, káoszt okoz

// const használata
    // általában csupa nagy betű, hogy lehessen beazonosítani, hogy konstans
    // nem lehet felülírni

const NAME = "Sanyi";

{
    const NAME = "Pisti";
    console.log(NAME);
}

console.log(NAME);