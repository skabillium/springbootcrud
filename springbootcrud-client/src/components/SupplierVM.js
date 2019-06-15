import constants from "@/components/constants";

export default {
  name: "supplier",
  components: {},
  data: () => {
    return {
      visible: false,
      context: "Supplier",
      supplier: initSupplier(),
      isDeletable: false,
      rules: {
        firstName: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        lastName: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        companyName: {
          required: true,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        vatNumber: {
          required: true,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        irsOffice: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        address: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        zipCode: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        city: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        },
        country: {
          required: false,
          max: constants.sizes.SIZE_M,
          trigger: "blur"
        }
      }
    }
  },
  created() {
    console.log("Supplier created")
  },
  mounted() {
    this.$events.$on('edit-supplier', eventData => this.onEditSupplier(eventData))
    console.log("Supplier mounted");
  },
  destroyed() {
    this.$events.$off('edit-supplier')
    console.log('Supplier destroyed')
  },
  methods: {
    clearValidation() {
      console.log('validation cleared')
    },
    save() {
      console.log('save')
    },
    confirmDelete() { },
    onEditSupplier(eventData) {
      if (eventData != null) {
        this.$http.get('suppliers/' + eventData.id)
          .then(response => {
            this.isDeletable = true
            this.supplier = response.data
            this.visible = true
          })
      } else {
        Object.assign(this.$data.supplier, initSupplier())
        this.visible = true
      }
    },
  }
};

function initSupplier() {
  return {
    id: null,
    firstName: "",
    lastName: "",
    vatNumber: "",
    irsOffice: "",
    address: "",
    zipCode: "",
    city: "",
    country: ""
  }
}
