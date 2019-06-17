import Person from '@/components/Person'

export default {
  components: {
    Person
  },
  created() {
    this.refreshPersons()
    console.log('Persons created')
  },
  mounted() {
    // subscribe to the 'row-selected' event (wherever it may come from, should come from the child table component)
    this.$events.$on('row-selected', eventData => this.onPersonSelected(eventData))
    this.$events.$on('person-edited', eventData => this.onPersonEdited(eventData))
    console.log('Persons mounted')
  },
  beforeDestroy() {
    // un-subscribe from events
    this.$events.$off('row-selected')
    this.$events.$off('person-edited')
  },
  destroyed() {
    console.log('Persons destroyed')
  },
  data: function () {
    return {
      url: 'persons/search/findByQuery?query=',
      query: '',
      persons: [],
      countActiveUrl: 'persons/search/countActiveUsers',
      searchActive: false,
      activeCount: 0,
      fields: [
        {
          name: 'id',
          title: 'Α/Α',
          sortField: 'id'
        },
        {
          name: 'name',
          title: 'Όνομα',
          sortField: 'name'
        },
        {
          name: 'email',
          title: 'Email',
          sortField: 'email'
        }
      ]
    }
  },
  watched: {
    query: function (newValue) {
      this.query = newValue
      console.log(newValue)
      this.refreshPersons()
    }
  },
  methods: {
    createPerson(event) {
      console.log('fire edit-person event')
      this.$events.fire('edit-person', null)
    },
    onPersonSelected(dataItem) {
      console.log('fire edit-person event')
      this.$events.fire('edit-person', dataItem)
    },
    onPersonEdited(dataItem) {
      this.refreshPersons()
    },
    refreshPersons() {
      // If the searchActive option is set to true then the url changes to
      // to the findActive api operation
      if (this.searchActive) {
        this.url = 'persons/search/findActive?query='
      } else {
        this.url = 'persons/search/findByQuery?query='
      }
      // Update the persons table and the active counter
      Promise.all([
        this.$http.get(this.url + this.query),
        this.$http.get(this.countActiveUrl)
      ]).then(([personResponse, activeCountResponse]) => {
        this.persons = personResponse.data._embedded.persons
        this.activeCount = activeCountResponse.data
      }).catch(e => console.log(e))
    }
  }
}
