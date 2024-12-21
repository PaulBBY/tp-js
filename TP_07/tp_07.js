function plusGrandeDate(d1, d2) {

    const d1 = new Date(d1);
    const d2 = new Date(d2);
    
    if (d1 > d2) {
        return `La plus grande date est : ${d1.toLocaleDateString()}`;
    } else if (d2 > d1) {
        return `La plus grande date est : ${d2.toLocaleDateString()}`;
    } else {
        return `Les deux dates sont égales : ${d1.toLocaleDateString()}`;
    }
}

function calculerAge(dtn) {

    const dtn = new Date(dtn);
    
    const ajd = new Date();
    
    let age = ajd.getFullYear() - dtn.getFullYear();
    let mois = ajd.getMonth() - dtn.getMonth();

    if (mois < 0 || (mois === 0 && today.getDate() < dtn.getDate())) {
        age--;
        mois = mois + 12;
    }

    if (mois < 0) {
        mois += 12;
    }

    return `Vous avez ${age} ans et ${mois} mois`;
}

console.log(calculerAge('2000-01-01'));
console.log(calculerAge('1995-05-15'));

console.log(plusGrandeDate('2024-12-20', '2023-05-15')); 
console.log(plusGrandeDate('2024-12-20', '2024-12-20')); 
console.log(plusGrandeDate('2022-10-12', '2024-01-01'));