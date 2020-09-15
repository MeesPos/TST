let studentNummer = 1005589;
let klas = 'MD2Aa';
let groep = [];

function maakStudent(studentNummer, klas) {
    let studentInfo = {
        studentennummer : studentNummer,
        klas : klas
    };
    groep.push(studentInfo);

    localStorage.setItem(groep);
}