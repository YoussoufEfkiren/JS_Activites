const inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS',frais:500 },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS',frais:600 },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' ,frais:1500}, 
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS',frais:6500 }
    ];
 

        let pureAppendInscription = (inscription, inscriptions) => {
            return [...inscriptions, inscription];
          };
          
          let nouvelleInscription = { id: 14, nom: 'BENJELLOUN', filiere: 'DEVOWFS', frais: 1000 };
          let nouvellesInscriptions = pureAppendInscription(nouvelleInscription, inscriptions);
          
          console.log(nouvellesInscriptions);
          

          const totalFrais = nouvellesInscriptions.reduce((total, inscription) => {
            return total + inscription.frais;
          }, 0);

          console.log(totalFrais);
    
    