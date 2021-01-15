// exo1
let me = {
    nom : "Hammani",
    prenom : "Jamila",
    age : 26 ,
    taille : "1m57"
}

console.log(me);
console.log(me.age);

console.log("_________");
// exo 2
let persoDeux = {
    nom : "Dupond",
    prenom : "Juliette",
    age : 27,
    taille : "1m64"
}
// exo 3
let persoTrois = {
    nom : me.nom,
    prenom : persoDeux.prenom,
    age : persoDeux.age,
    taille : "1m80"
}

console.log(persoTrois);

console.log("_________");
// exo4
let persoQuatre = {
    methode () {
        console.log(`Coucou ${persoDeux.prenom}`);
    }
}
persoQuatre.methode()

console.log("_________");
// exo5

let perso = {
    nom : "william",
    prenom : "Peter",
    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom}`);
    }
}

perso.sePresenter()

console.log("_________");
// exo6

let persoSix = {
    nom : "Julien",
    demandeAge() {
        this.age = prompt('quel age as tu');
        console.log(`${this.nom} a ${this.age} ans`);

    },
}
persoSix.demandeAge();
console.log(persoSix);

console.log("_________");
// exo7
let joueurUn = {
    nom : "Jamila", 
    age : 26
}
let joueurDeux = {
    nom : "Louise", 
    age : 21
}
let joueurTrois = {
    nom : "Zulma", 
    age : 29
}

let voleur = {
    usurpation(perso) {
        this.nom = perso.nom;
        this.age = perso.age;
    }
}

voleur.usurpation(joueurUn);
console.log(voleur);

console.log("_________");
// exo8

let chefDeux = {
    nom : "Sergio",
    panier : ["pain", "mozza"],
}
let chefUn = {
    nom : "François",
    panier : ["tomate", "huile"],
    derobe() {
        while (chefDeux.panier.length !== 0) {
            this.panier.push(chefDeux.panier[0]);
            chefDeux.panier.splice(0,1);
        }
    }
}

chefUn.derobe()
console.log(chefUn.panier);
console.log(chefDeux.panier);
