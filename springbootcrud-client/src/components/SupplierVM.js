import constants from "@/components/constants";

export default {
  name: "supplier",
  components: {},
  data: () => {
    return {
      visible: false,
      context: "Supplier",
      supplier: initSupplier(),
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
    };
  },
  created() {
    console.log("Supplier created");
  },
  mounted() {
    console.log("Supplier mounted");
  },
  destroyed() {},
  computed: {}
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
  };
}
