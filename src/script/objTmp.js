// 
// Segoe MDL2 Assests
var time = {
    color : '#265E47',
    title : 'Arrêt du temps',
    school : 'Transmutation',
    schoolFull : 'Transmutation',
    effect:'Seul le PJ peut agir pendant 1d4+1 rounds.',
    image: {
        backgroundImage: "url('time.jpg')"
    },
    background: {
        backgroundImage: "url('Transmutation.svg')"
    }
};
var fireball = {
    color : '#265E47',
    title : 'Boule de feu',
    school : 'Evocation',
    schoolFull : 'Évocation (feu)',
    effect: "1d6 points de dégâts de feu/niveau, 6 m de rayon.",
    image: {
        backgroundImage: "url('fireball.jpg')"
    },
    background: {
        backgroundImage: "url('Evocation.svg')"
    }
};
// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Mains%20br%c3%bblantes.ashx
// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Voile%20du%20paradis.ashx
var door = {
    color : '#265E47',
    title : 'Porte dimensionnelle',
    school : 'Invocation',
    schoolFull : 'Invocation (téléportation)',
    level : 'Barde 4, Conj 3, Ens/Mag 4, Magus 4, Sor 4',
    castingTime : '1 action simple',
    components : 'V',
    range : 'longue',
    effect : 'vague de 3 m (2 c) de profondeur, de 3 m (2 c) de large/niveau et de 60 cm de haut/niveau',
    zone : 'rayonnement en forme de cône',
    target : 'le jeteur de sorts et les créatures consentantes ou les objets touchés',
    duration : 'instantanée',
    savingThrow : 'aucun ou Volonté, annule (objet)',
    spellResistance : 'oui ou non (objet)',
    summary:'Téléporte le PJ sur une courte distance.',
    image: {
        backgroundImage: "url('https://cdna2.artstation.com/p/assets/images/images/002/509/550/large/edgar-ovalles-b08finalbattlemagefinalartstt05062016-012.jpg?1462541356')"
    },
    background: {
        backgroundImage: "url('Conjuration.svg')"
    }
};

var app = new Vue({
  el: '#app',
  data: door
});