// register modal component
Vue.component("modal", {
  template: "#modal-template"
});

var vm = new Vue({
  el: "#main",
  data: {
    list: [
      {
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
    ],
    showModal: false,
    title: "",
    body: ""
  },
  methods: {
    add: function() {
      this.list.push({
        name: "Juan"
      });
    },
    replace: function() {
      this.list = [
        {
          name: "Edgard"
        }
      ];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      console.log(evt);
    },
    edit: function(element) {
      this.$set(element, "editmode", true);
      this.title = element.name;
      this.body = element.description.trim();
    },
    okAction: function() {
      showModal: false;
    },
    cancelAction: function() {
      showModal: false;
    }
  }
});
