let google = {
    "nom": "Google",
    "siege_social": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
      {
        "nom": "Larry Page",
        "date_naissance": "26/03/1973",
        "lieu_naissance": "East Lansing, Michigan"
      },
      {
        "nom": "Sergey Brin",
        "date_naissance": "21/08/1973",
        "lieu_naissance": "Moscou, Union Soviétique"
      }
    ],
    "chiffres_affaires": [
      {
        "annee": 2008,
        "chiffre": 16.49
      },
      {
        "annee": 2012,
        "chiffre": 37.97
      },
      {
        "annee": 2016,
        "chiffre": 89.46
      },
      {
        "annee": 2018,
        "chiffre": 136.2
      }
    ]
  };
  google.fondateurs.forEach(element => {
    console.log(element)
  });
  
  google.chiffres_affaires.forEach(element => {
    console.log(element)
  });