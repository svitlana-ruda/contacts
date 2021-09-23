<template>
  <nav class="nav" role="navigation">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="nav__tab"
      :class="{ 'nav__tab--active': currentTab === tab }"
      role="button"
      @click="gotToTabAndCloseOpenCard(tab)"
    >
      {{ tab }}
    </button>
  </nav>
  <main v-if="sortedContacts.length" class="main" role="main">
    <ContactCard
      v-for="contactItem in sortedContacts"
      :key="contactItem.login.uuid"
      :contact="contactItem"
      :contact-id="contactItem.login.uuid"
    />
  </main>
  <main v-else class="main--empty" role="main">
    <p>Sorry, no contacts yet!</p>
  </main>
</template>

<script>
  import configuration from '../data/configuration.json'
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import ContactCard from '../components/ContactCard'

  export default {
    name: 'Home',

    components: { ContactCard },

    data() {
      return {
        tabs: configuration.tabs
      }
    },

    computed: {
      ...mapState('contact', ['tab']),
      ...mapGetters('contact', ['sortedContacts', 'initialTab']),
      currentTab: {
        get() {
          return this.tab || this.initialTab
        },
        set(value) {
          this.SET_TAB(value)
        }
      }
    },

    created() {
      this.fetchContacts()
    },

    methods: {
      ...mapMutations('contact', ['SET_TAB', 'SET_ACTIVE_ID']),
      ...mapActions('contact', ['fetchContacts']),
      gotToTabAndCloseOpenCard(tab) {
        this.currentTab = tab
        this.SET_ACTIVE_ID(null)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &__tab {
      min-width: 48px;
      min-height: 24px;
      margin: 8px;
      text-transform: uppercase;
      border: 0;
      background: #fff;
      font-size: 18px;
      cursor: pointer;

      &--active {
        color: #2c3e50;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 48px;
          border-bottom: 1px solid #2c3e50;
        }
      }
    }
  }

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0.25rem;
    margin: 32px 8px;

    &--empty {
      font-size: 20px;
      text-align: center;
    }
  }
</style>
