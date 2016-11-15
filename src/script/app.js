// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Mains%20br%c3%bblantes.ashx
// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Voile%20du%20paradis.ashx
const door = {
    color: '#265E47',
    title: 'Porte dimensionnelle',
    school: 'Invocation',
    schoolFull: 'Invocation (téléportation)',
    level: 'Barde 4, Conj 3, Ens/Mag 4, Magus 4, Sor 4',
    castingTime: '1 action simple',
    components: 'V',
    range: 'longue',
    effect: 'vague de 3 m (2 c) de profondeur, de 3 m (2 c) de large/niveau et de 60 cm de haut/niveau',
    zone: 'rayonnement en forme de cône',
    target: 'le jeteur de sorts et les créatures consentantes ou les objets touchés',
    duration: 'instantanée',
    savingThrow: 'aucun ou Volonté, annule (objet)',
    spellResistance: 'oui ou non (objet)',
    summary: 'Téléporte le PJ sur une courte distance.',
    image: {
        backgroundImage: "url('https://cdna2.artstation.com/p/assets/images/images/002/509/550/large/edgar-ovalles-b08finalbattlemagefinalartstt05062016-012.jpg?1462541356')"
    },
    background: {
        backgroundImage: "url('Conjuration.svg')"
    }
};

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

const spells = chunk(9, repeat(door));

new Vue({
    el: '.book',
    data: {
        co: spells
    }
});