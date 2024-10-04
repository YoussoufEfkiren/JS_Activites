const personnes = [
    { nom: "ALAMI", age: 33, estMember: true },
    { nom: "FATIHI", age: 24, estMember: false },
    { nom: "RAJI", age: 45, estMember: true },
    { nom: "RAMI", age: 37, estMember: false }
    ];

    let NewList = personnes.filter((personne)=>personne.estMember).map((personne)=>personne.nom)

    console.log(NewList)

//     function filtrer()
// {
//     let res=[];
//     personnes.forEach(element => {
//         if(element.estMember==true){
//             res.push(element.nom)
//         }
//     });
 
 
//     return res;
 
// }
// console.log(filtrer())