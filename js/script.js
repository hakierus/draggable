// register modal component
Vue.component("modal", {
  template: "#modal-template"
});

var vm = new Vue({
  el: "#main",
  data: {
    list: [
      {
        name: "Offline Mode",
        description: "Short description",
        isEditable: false,
        id: 1
      },
      {
        name: "Export Scanned Text",
        description: "Short description",
        isEditable: false,
        id: 2
      },
      {
        name: "Translate Scanned Text",
        description: "Short description",
        isEditable: false,
        id: 3
      },
      {
        name: "QR Code Reader Integration",
        description: "Short description",
        isEditable: false,
        id: 4
      },
      {
        name: "Change History",
        description: "Short description",
        isEditable: false,
        id: 5
      },
      {
        name: "Bug Fixes & Improvements",
        description: "Short description",
        isEditable: false,
        id: 6
      }
    ],
    showModal: false,
    isEditableTrash: false,
    title: "",
    body: "",
    id: "",
    listQuantity: "",
    placeholderBody: "",
    placeholderTitle: "",
    maxCount: 250,
    remainingCount: 250,
    featureText: "REQUEST A FEATURE"
  },
  methods: {
    submit: function(title, body, index, list) {
      if (title.length > 0 && index == 0) {
        this.list.push({
          name: title,
          description: body,
          isEditable: true,
          id: this.list.length + 1
        });
        this.showModal = false;
        this.featureText = "REQUEST ANOTHER FEATURE";
      } else {
        list[index - 1].name = title;
        list[index - 1].description = body;
        this.showModal = false;
      }
    },
    remove: function(index, list) {
      list.splice(index -1, 1);
      this.showModal = false;
      if (list.length == 6) {
        this.featureText = "REQUEST A FEATURE";
      }
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
      this.title = element.name;
      this.body = element.description;
      this.id = element.id;
      this.isEditableTrash = true;
      if (element.isEditable) {
        this.showModal = true;
      };
      this.scrollToBottom()
    },
    okAction: function() {
      showModal: false;
    },
    cancelAction: function(element) {
      showModal: false;
    },
    open: function() {
      this.title = "";
      this.body = "";
      this.id = 0;
      this.quantity = this.list;
      this.placeholderTitle = "Add a Title";
      this.placeholderBody = "(Optional) Write a short description";
      this.showModal = true;
      this.remainingCount = 250;
      this.isEditableTrash = false;
      this.scrollToBottom()
    },
    countdown: function(body) {
      this.remainingCount = this.maxCount - this.body.length;
    },
    scrollToBottom: function() {
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  computed: {
    isEditable: function() {
        editable: this.isEditableTrash === 'true';
    }

  }
});
