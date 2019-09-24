
// Regn ut hvor høy du blir

// Input vi får fra prompt og annen type input er String
const inpMorsHoyde = prompt("Hvor høy er mora di?");
const inpFarsHoyde = prompt("Hvor høy er faren din?");

// Vi må gjøre om String til Number (tekst til tall)
const morsHoyde = Number(inpMorsHoyde);
const farsHoyde = Number(inpFarsHoyde);


function finnHoyde(mh, fh) {
    // Hvis du er gutt
    const dinHoyde = (mh + fh + 12) / 2;
    document.write("Du blir " + dinHoyde + " cm");
}

// Starter funksjonen
finnHoyde(morsHoyde, farsHoyde);

/*
const dittNavn = prompt("Hva heter du?");

function skrivMelding(navn) {
    document.write("Hei " + navn);
}

skrivMelding(dittNavn);
*/