let inscriptions = [
    { id: 10, nom: 'ALAMI', filiere: 'DEVOWFS' },
    { id: 11, nom: 'RAJI', filiere: 'DEVOWFS' },
    { id: 12, nom: 'NAJI', filiere: 'DEVOWFS' },
    { id: 13, nom: 'IBRAHIMI', filiere: 'DEVOWFS' }
    ];
    
    let pureInsert = (id, nom, filiere, position) =>{
        return [...inscriptions.splice(0, position), { id, nom, filiere }, ...inscriptions.splice(position)]
    }

    // let nouvelleInscription = { id: 14, nom: 'BENJELLOUN', filiere: 'DEVOWFS' };
    let nouvellesInscriptions = pureInsert( 14, 'BENJELLOUN', 'DEVOWFS' , 0);
    console.log(nouvellesInscriptions);
