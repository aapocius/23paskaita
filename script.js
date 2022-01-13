'use stricts';

var valstybes = [
            {name: 'Portugalija', plotas: 92212, gskaicius: 10347892, },
            {name: 'Italija', plotas: 301338, gskaicius: 60317116, },
            {name: 'Šveicarija', plotas: 41285, gskaicius: 8570146, },
            {name: 'Norvegija', plotas: 385207, gskaicius: 5391369, },
            {name: 'Ispanija', plotas: 505990, gskaicius: 47450795, }
];

function averageGskaicius (name, plotas, gskaicius) {
    var vidgyvsk = plotas / gskaicius * 1000000;
    var gskaiciusapv = gskaicius / 1000000;
    document.write(`<br><b>Šalis:</b> ${name}, joje gyvena: <b>${gskaiciusapv.toFixed(2)}</b> mln. gyventojų. Valstybės plotas: <b>${plotas}</b> km², `);
    document.write(`plotas tenkantis vienam gyventojui: <b>${vidgyvsk.toFixed(2)}</b> m².<br>`);
    
}
for (var x of valstybes) {
    averageGskaicius(x.name, x.plotas, x.gskaicius);
}