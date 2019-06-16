import Supplier from '@/components/Supplier'

export default {
  components: {
    Supplier
  },
  data: () => {
    return {
      url: "suppliers/search/findByQuery?query=",
      query: "",
      suppliers: [],
      fields: [
        {
          name: "id",
          title: "A/A",
          sortField: "id"
        },
        {
          name: "firstName",
          title: "Όνομα",
          sortField: "firstName"
        },
        {
          name: "lastName",
          title: "Επίθετο",
          sortField: "lastName"
        },
        {
          name: "companyName",
          title: "Εταιρεία",
          sortField: "companyName"
        },
        {
          name: "vatNumber",
          title: "VAT",
          sortField: "vatNumber"
        },
        {
          name: "irsOffice",
          title: "IRS",
          sortField: "irsOffice"
        },
        {
          name: "address",
          title: "Διεύθυνση",
          sortField: "address"
        },
        {
          name: "zipCode",
          title: "T.K.",
          sortField: "zipCode"
        },
        {
          name: "city",
          title: "Πόλη",
          sortField: "city"
        },
        {
          name: "country",
          title: "Χώρα",
          sortField: "country"
        }
      ]
    };
  },
  created() {
    this.refreshSuppliers();
    console.log("Suppliers created");
  },
  mounted() {
    this.$events.$on('supplier-edited', eventData => this.onSupplierEdited(eventData))
  },
  methods: {
    refreshSuppliers() {
      console.log(this.searchActive)
      this.$http
        .get(this.url + this.query)
        .then(response => {
          this.suppliers = response.data._embedded.suppliers;
        })
        .catch(err => {
          console.log("error: ");
          console.log(err);
        });
    },
    onSupplierSelected(dataItem) {
      this.$events.fire('edit-supplier', dataItem)
    },
    createSupplier() {
      this.$events.fire('edit-supplier', null)
    },
    onSupplierEdited(eventData) {
      this.refreshSuppliers()
    }
  }
};
