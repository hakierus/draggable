var vm = new Vue({
    el: "#main",
    data: {
        list1: [{
                name: "Offlie Mode",
                description: "Short description",
                id: 1
            },
            {
                name: "Export Scanned Text",
                description: "Short description",
                id: 2
            },
            {
                name: "Translate Scanned Text",
                description: "Short description",
                id: 3
            },
            {
                name: "QR Code Reader Integration",
                description: "Short description",
                id: 4
            },
            {
                name: "Change History",
                description: "Short description",
                id: 5
            },
            {
                name: "Bug Fixes & Improvements",
                description: "Short description",
                id: 6
            }
        ]
    },
    methods: {
        add: function () {
            this.list.push({
                name: 'Juan'
            });
        },
        replace: function () {
            this.list = [{
                name: 'Edgard'
            }]
        },
        clone: function (el) {
            return {
                name: el.name + ' cloned'
            }
        },
        log: function (evt) {
            console.log(evt)
        }
    }
});