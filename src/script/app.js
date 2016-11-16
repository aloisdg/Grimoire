Vue.component('demo-grid', {
    template: '#grid-template',
    replace: true,
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.data
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        },
        select: function (spell) {
            cart[spell.name] = cart.hasOwnProperty(spell.name) ? cart[spell.name] + 1 : 1
            document.querySelector('#test').innerHTML = Object.keys(cart).map(item => "<br/>- " + item + " x" + cart[item])


            printList.push(JSON.stringify(spell));

            // for(key in cart){
            //   var value = cart[key];
            //   for (var valueIndex = 0; valueIndex < value; valueIndex++) {
            //     printList.push(key);
            //   }
            // }

            document.querySelector('#printButton').href = "print.html?" + encodeURIComponent(JSON.stringify(printList))
        }
    }
})

// tarot size
// 70mm x 121mm
// 59.76x112.72 mm // true one?

let cart = {};
let printList = [];

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'script/spells.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        const spells = JSON.parse(response).Spells;

        //error:
        // empty school should be universelle
        // racine/choc/brise/pénombre/scoop/ etc are empty and level == 0
        // Prévoyance has not casting time
        // Putréfaction de l'eau et de la nourriture witch level?
        // Lumières dansantes * level?
        // Rayon de givre  * level?
        // Étincelles * level?
        // berceuse bard level?
        // Hébétement * level?

        // ctrl+f undefined

        // Appel cacophonique de groupe summary is empty

        const data = spells.map(spell => ({
            name: spell.Name,
            school: spell.School,
            levels: spell.Levels,//.map(lvl => lvl.List + " " + lvl.Level).join(", "),
            castingTime: spell.CastingTime.Value,
            spellResistance: spell.SpellResistance ? JSON.stringify(spell.SpellResistance) : "",
            savingThrow: spell.SavingThrow ? JSON.stringify(spell.SavingThrow) : "",
            target: spell.Target ? JSON.stringify(spell.Target) : "",
            range: spell.Range ? JSON.stringify(spell.Range) : "",
            components: spell.Components ? JSON.stringify(spell.Components) : "",
            summary: spell.Summary
        }));

        var demo = new Vue({
            el: '#demo',
            data: {
                searchQuery: '',
                gridColumns: ['name', 'school', 'levels', 'castingTime', 'spellResistance', 'savingThrow', 'range', 'target', 'components', 'summary'],
                gridData: data
            }
        })
    });
}

init();