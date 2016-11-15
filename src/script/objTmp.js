function chunk(chunkSize, array) {
    return array.reduce(function(previous, current) {
        let chunk;
        if (previous.length === 0 ||
                previous[previous.length - 1].length === chunkSize) {
            chunk = [];   // 1
            previous.push(chunk);   // 2
        }
        else
            chunk = previous[previous.length -1];   // 3
        chunk.push(current);   // 4
        return previous;   // 5
    }, []);   // 6
}

// 
// Segoe MDL2 Assests
// var time = {
//     color: '#265E47',
//     title: 'Arrêt du temps',
//     school: 'Transmutation',
//     schoolFull: 'Transmutation',
//     effect: 'Seul le PJ peut agir pendant 1d4+1 rounds.',
//     image: {
//         backgroundImage: "url('time.jpg')"
//     },
//     background: {
//         backgroundImage: "url('Transmutation.svg')"
//     }
// };
// var fireball = {
//     color: '#265E47',
//     title: 'Boule de feu',
//     school: 'Evocation',
//     schoolFull: 'Évocation (feu)',
//     effect: "1d6 points de dégâts de feu/niveau, 6 m de rayon.",
//     image: {
//         backgroundImage: "url('fireball.jpg')"
//     },
//     background: {
//         backgroundImage: "url('Evocation.svg')"
//     }
// };

// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Mains%20br%c3%bblantes.ashx
// http://www.pathfinder-fr.org/Wiki/Pathfinder-RPG.Voile%20du%20paradis.ashx
var door = {
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

let spells = chunk(9, Array.from({length: 20}, () => door));

new Vue({
    el: '.book',
    data: {
        co: spells
    }
    //   el: '#app',
    //   data: door,
    //     components: {
    //     // <my-component> will only be available in parent's template
    //     'my-component': Child
    //   }
});


// function loadJSON(callback) {
//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'script/spells.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// function init() {
//     loadJSON(function (response) {
//         // Parse JSON string into object
//         var spells = JSON.parse(response);

//         // for (var i = 0; i < spells.Spells.length; i++) {
//         //     console.log(spells.Spells[i].Name + " (" + spells.Spells[i].School+ ")");
//         // }

//     });
// }

// init();