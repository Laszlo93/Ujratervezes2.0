//Clean code's rules

    // Nevek
    let n; //nem jó, nem kifejező
    let nrOfNumber //jobb, de még mindig nem teljesen egyértelmű

    // Ne legyen a név félrevezető
    function adder(x, y) {  //nem jó, mert a név azt sugallja, hogy összeadás lesz, pedig a szorzattal tér vissza
        return x * y;
    }

    // Kerüld az O és I karaktereket
    let IO; let l0; //összetéveszthető ha a betűtípus nem különbözteti meg őket ilyen egyértelműen
    
    // Komment: egy soros
    function getUserRoles() {   //ha kifejező a név, akkor ne használj kommentet, fölösleges
        return user.roles;
    }
        //matches any alphabetical cahrs between m and n
    let idPatter = /m[a-z]n/;   //mindig az adott változó fölött legyen a komment

    //Formázás
        //blokkon belül mindig egy tabbal beljebb kezdem(intendálás)
        //fontosabb részek között mindig kihagyok egy sort, mint pl változó, függvények
        //egy függvénynél max 4-6 sor, 10 felett érdemes ketté bontani
        //a függvény nevénél igét kell használni és lehetőleg legyen több 3 inputnál
        