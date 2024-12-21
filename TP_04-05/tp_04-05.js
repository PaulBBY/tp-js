function fonctionConstante() {
    return 33;
}

function bonjourUnTel(name) {
    if (name === undefined) {
        throw new Error('Il manque un argument')
    }
    if (typeof name !== 'string') {
        throw new TypeError(`${name} n\'est pas de type texte`);
    }
    return `Bonjour ${name}`;
}

function fonctionCalcul(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error('Il manque un ou des arguments')
    } if (isNaN(a) || isNaN(b)) {
        throw new TypeError(`"${a}" ou/et "${b}" n\'est pas un nombre`);
    }

    a = Number(a);
    b = Number(b);

    return (a * b) + a + b
}

function fonctionControleTableau(tableau) {
    if (tableau === undefined) {
        throw new Error('Il manque un argument');
    }
    if (!Array.isArray(tableau)) {
        throw new TypeError(`"${tableau}" doit être un tableau`);
    }
    if (tableau.length === 0) {
        throw new Error('Le tableau ne doit pas être vide');
    }
    return tableau.every(valeur => typeof valeur === 'number');
}

function fonctionMoyenne(tableau, fonctionControleTableau) {
    if (tableau === undefined || fonctionControleTableau === undefined) {
        throw new Error('Il manque un ou des arguments')
    }
    try {
        if (fonctionControleTableau(tableau)) {
            let summ = 0;
            tableau.forEach(value => {
                summ += value;
            })
            return summ / tableau.length;
        }

        return false;
    } catch (error) {
        if (error.message === 'Le tableau ne doit pas être vide') {
            return 0;
        }
        throw error;
    }

}

function fonctionMaj(chaine) {
    if (chaine === undefined) {
        throw new Error('Il manque un argument')
    }
    if (typeof chaine !== 'string') {
        throw new TypeError(`${chaine} n\'est pas de type texte`);
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function fonctionPhraseMaj(chaine, fonctionMaj) {
    if (chaine === undefined) {
        throw new Error('Il manque un argument')
    }
    if (typeof chaine !== 'string') {
        throw new TypeError(`${chaine} n\'est pas de type texte`);
    }
    const mots = chaine.split(' ')
    let majChaine = '';

    try {
        for (let i = 0; i < mots.length; i++) {
            majChaine += fonctionMaj(mots[i])
            if (i < mots.length - 1) {
                majChaine += ' ';
            }

        }
        return majChaine;
    } catch (error) {
        throw error;
    }

}

function functioCeption(n) {
    return function (nb) {
        return nb * n;
    }
}

function creerGestionnaire() {

    let taches = [];
    function ajouterTache(description) {
        const tache = {
            description: description,
            statut: false
        }
        taches.push(tache);

    }
    function terminerTache(index) {
        taches[index].statut = true;
    }
    function afficherTaches() {
        taches.forEach(element => {
            console.log(element);
        });
    }

    return {
        ajouterTache,
        terminerTache,
        afficherTaches
    }
}

console.log("Fonction constante : ", fonctionConstante());

try {
    console.log("Bonjour un tel 1 : ", bonjourUnTel("Paul"))
} catch (error) {
    console.error("Bonjour un tel 1 : ", error);
}

try {
    console.log("Bonjour un tel 2 : ", bonjourUnTel(4))
} catch (error) {
    console.error("Bonjour un tel 2 : ", error);
}

try {
    console.log("Fonction calcul 1 : ", fonctionCalcul(12, 3))

} catch (error) {
    console.error("Fonction calcul 1: ", error);

}

try {
    console.log("Fonction calcul 2 : ", fonctionCalcul('12', 3))

} catch (error) {
    console.error("Fonction calcul 2 : ", error);

}

try {
    console.log("Fonction calcul 3 : ", fonctionCalcul(3))

} catch (error) {
    console.error("Fonction calcul 3 : ", error);

}

try {
    console.log("Fonction calcul 4 : ", fonctionCalcul(12, 'deux'));

} catch (error) {
    console.error("Fonction calcul 4 : ", error);

}

try {
    console.log("Fonction controle tableau 1 : ", fonctionControleTableau([1, 2, 3, 4, 5]));
} catch (error) {
    console.error(error)
}


try {
    console.log("Fonction controle tableau 2 : ", fonctionControleTableau([1, 2, 3, 4, "a"]))
} catch (error) {
    console.error("Fonction controle tableau 2 : ", error)
}


try {
    console.log("Fonction controle tableau 3 : ", fonctionControleTableau([]));
} catch (error) {
    console.error("Fonction controle tableau 3 : ", error)
}

try {
    console.log("Fonction controle tableau 4 : ", fonctionControleTableau());
} catch (error) {
    console.error("Fonction controle tableau 4 : ", error)
}


try {
    console.log("Fonction fonctionMoyenne 1 : ", fonctionMoyenne([1, 2, 3, 4, 5], fonctionControleTableau));
} catch (error) {
    console.error("Fonction fonctionMoyenne 1 : ", error)
}


try {
    console.log("Fonction fonctionMoyenne 2 : ", fonctionMoyenne([1, 2, 3, 4, "a"], fonctionControleTableau))
} catch (error) {
    console.error("Fonction fonctionMoyenne 2 : ", error)
}


try {
    console.log("Fonction fonctionMoyenne 3 : ", fonctionMoyenne([], fonctionControleTableau));
} catch (error) {
    console.error("Fonction fonctionMoyenne 3 : ", error)
}

try {
    console.log("Fonction fonctionMoyenne 4 : ", fonctionMoyenne(fonctionControleTableau));
} catch (error) {
    console.error("Fonction fonctionMoyenne 4 : ", error)
}

try {
    console.log("Fonction fonctionMaj 1 : ",fonctionMaj("hello"));
} catch (error) {
    console.error("Fonction fonctionMaj 1 : ", error)
}

try {
    console.log("Fonction fonctionMaj 2 : ", fonctionMaj("hi my name is paul", fonctionMaj));
} catch (error) {
    console.error("Fonction fonctionMaj 2 : ", error)
}



const x2 = functioCeption(2)
const x4 = functioCeption(4)

console.log(x4(2))
console.log(x2(2))

const gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire les courses");
gestionnaire.ajouterTache("Préparer le dîner");

gestionnaire.afficherTaches();

gestionnaire.terminerTache(1); // Marquer la tâche d'index 1 comme terminée

gestionnaire.afficherTaches();


