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
      if (this.$refs['supplierForm']) {
        this.$refs['supplierForm'].clearValidate()
      }
    },
    save() {
      this.$refs['supplierForm'].validate().then(() => {
        if (this.supplier.id != null) {
          this.$http.patch('suppliers/' + this.supplier.id, this.supplier)
            .then(response => {
              this.handleSuccess(response)
            })
            .catch(e => this.handleError(e))
        } else {
          this.$http.post('suppliers', this.supplier)
            .then(response => this.handleSuccess(response))
            .catch(e => this.handleError(e))
        }
      }).catch(e => console.error('VALIDATION FAILED'))
    },
    cancel() {
      this.visible = false
      this.clearValidation()
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
    handleSuccess(response) {
      this.visible = false
      this.successFloat(this.$messages.successAction)
      this.$events.fire('supplier-edited', this.supplier)
    },
    handleError(e) {
      this.showDefaultError(e)
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
