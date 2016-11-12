// 
// Segoe MDL2 Assests
var time = {
    color: '#265E47',
    title: 'Arrêt du temps',
    school: 'Transmutation',
    schoolFull: 'Transmutation',
    effect: 'Seul le PJ peut agir pendant 1d4+1 rounds.',
    image: {
        backgroundImage: "url('time.jpg')"
    },
    background: {
        backgroundImage: "url('Transmutation.svg')"
    }
};
var fireball = {
    color: '#265E47',
    title: 'Boule de feu',
    school: 'Evocation',
    schoolFull: 'Évocation (feu)',
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
    template: `<div class="card" id="app">
                    <header class="sup content" v-bind:style="background">
                        <h1>{{title}}</h1>
                    </header>
                    <figure id="img" class="sub content" v-bind:style="image"></figure>
                    <figcaption class="sup content">
                        <span>{{schoolFull}}</span>
                    </figcaption>
                    <main class="sub content" v-bind:style="background">
                        <div id="PageContentDiv">
                            <ul>
                                <li><abbr title="Temps d'incantation">⌛</abbr><span>{{castingTime}}</span></li>
                                <li><abbr title="Composantes"></abbr><span>{{components}}</span></li>
                                <li><abbr title="Portée"></abbr><span>{{range}}</span></li>
                                <li><abbr title="Effet"></abbr><span>{{effect}}</span></li>
                                <li><abbr title="Zone d'effet"></abbr><span>{{zone}}</span></li>
                                <li><abbr title="Cible"></abbr><span>{{target}}</span></li>
                                <li><abbr title="Durée"></abbr><span>{{duration}}</span></li>
                                <li><abbr title="Jet de sauvegarde"></abbr><span>{{savingThrow}}</span></li>
                                <li><abbr title="Résistance à la magie">⛊</abbr><span>{{spellResistance}}</span></li>
                            </ul>
                            <hr />
                            <span>{{summary}}</span>
                        </div>
                    </main>
                </div>`,
    data: function () {
        return door;
    }
});

Vue.component('page', {
    template: `
    <div class="page">
    <div class="subpage">
                <card></card>
                <card></card>
                <card></card>
                <card></card>
                <card></card>
                <card></card>
                <card></card>
                <card></card>
                <card></card>
    </div></div>`
                // ,
    // data: function () {
    //     return door;
    // }
});


var app = new Vue({
    el: '.book'
    //   el: '#app',
    //   data: door,
    //     components: {
    //     // <my-component> will only be available in parent's template
    //     'my-component': Child
    //   }
});