// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Mains%20br%c3%bblantes.ashx
// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Voile%20du%20paradis.ashx
// let door = {
//     color: '#265E47',
//     title: 'Porte dimensionnelle',
//     school: 'Invocation',
//     schoolFull: 'Invocation (téléportation)',
//     level: 'Barde 4, Conj 3, Ens/Mag 4, Magus 4, Sor 4',
//     castingTime: '1 action simple',
//     components: 'V',
//     range: 'longue',
//     effect: 'vague de 3 m (2 c) de profondeur, de 3 m (2 c) de large/niveau et de 60 cm de haut/niveau',
//     zone: 'rayonnement en forme de cône',
//     target: 'le jeteur de sorts et les créatures consentantes ou les objets touchés',
//     duration: 'instantanée',
//     savingThrow: 'aucun ou Volonté, annule (objet)',
//     spellResistance: 'oui ou non (objet)',
//     summary: 'Téléporte le PJ sur une courte distance.',
//     image: {
//         backgroundImage: "url('https://cdna2.artstation.com/p/assets/images/images/002/509/550/large/edgar-ovalles-b08finalbattlemagefinalartstt05062016-012.jpg?1462541356')"
//     },
//     background: {
//         backgroundImage: "url('style/icons/conjuration.svg')"
//     }
// };

Vue.component('card', {
    template: '#card-template',
    replace: true,
    props: {
        spell: Object
    }
});

Vue.component('page', {
    template: '#page-template',
    replace: true,
    props: {
        collection: Array
    }
});

Vue.component('book', {
    template: '#book-template',
    replace: true,
    props: {
        yolo: Array
    }
});

var book = JSON.parse(decodeURIComponent(window.location.search.substring(1))).map(spell => JSON.parse(spell));
book.forEach(spell => console.log(spell.name + " (" + spell.school + ")"))

var k = [];

for (var i = 0; i < book.length; i++) {
    k.push({
        title: book[i].name,
        schoolFull: book[i].school,
        summary: book[i].summary,
        castingTime: book[i].castingTime,
        components: JSON.parse(book[i].components).Kinds.split(', ').map(x => x[0]).join(', '), // why components is a string instead of {}?
        range: book[i].range ? JSON.parse(book[i].range).Unit : book[i].range, // wtf not a json?
        effect: 'vague de 3 m (2 c) de profondeur',
        zone: 'rayonnement en forme de cône',
        target: book[i].target ? JSON.parse(book[i].target).Value : book[i].target,
        duration: 'instantanée',
        savingThrow: book[i].savingThrow,
        spellResistance: book[i].spellResistance,
        image: {
            backgroundImage: "url('https://cdna2.artstation.com/p/assets/images/images/002/509/550/large/edgar-ovalles-b08finalbattlemagefinalartstt05062016-012.jpg?1462541356')"
        },
        background: {
            backgroundImage: "url('style/icons/" + book[i].school.toLowerCase() + ".svg')"
        },
        level: book[i].levels[0].Level
    });
}

const spells = chunk(9, k);

new Vue({
    el: '.book',
    data: {
        co: spells
    }
});