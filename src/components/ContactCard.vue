<template>
  <section class="card" role="region" @click="SET_ACTIVE_ID(contactId)">
    <img
      :src="contact.picture.large"
      :alt="contactName"
      width="128"
      height="128"
    />
    <h2 class="card__name">{{ contactName }}</h2>
  </section>
  <transition name="fade">
    <article v-if="isCardActive" class="card--expanded" role="article">
      <img
        :src="contact.picture.large"
        :alt="contactName"
        width="128"
        height="128"
      />
      <span class="button__close" @click="SET_ACTIVE_ID(null)">&times;</span>
      <h2 class="card__name">{{ contactName }}</h2>
      <address class="address">
        <a :href="`tel:${contact.cell}`" class="address__item address__link">{{
          contact.cell
        }}</a>
        <a
          :href="`mailto:${contact.email}`"
          class="address__item address__link"
          >{{ contact.email }}</a
        ><br />
        <p class="address__item">{{ contactLocation }}</p>
        <p class="address__item">{{ contactAddress }}</p>
      </address>
    </article>
  </transition>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'ContactCard',

    props: {
      contact: {
        type: Object,
        default: () => {},
        required: true
      },
      contactId: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState('contact', ['activeId']),
      isCardActive() {
        return this.contactId === this.activeId
      },
      contactName() {
        return `${this.contact.name.last}, ${this.contact.name.first}`
      },
      contactLocation() {
        return `${this.contact.location.country}, ${this.contact.location.state}`
      },
      contactAddress() {
        return `${this.contact.location.city}, ${this.contact.location.street.number} ${this.contact.location.street.name}`
      }
    },

    methods: {
      ...mapMutations('contact', ['SET_ACTIVE_ID'])
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    min-width: 240px;
    margin: 8px;
    padding: 8px 0;
    background: #fff;
    overflow: hidden;
    text-align: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    cursor: pointer;

    &__name {
      font-size: 16px;
    }

    &--expanded {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 340px;
      padding: 16px;
      background: #fff;
      box-shadow: rgba(14, 30, 37, 0.12) 0 2px 4px 0,
        rgba(14, 30, 37, 0.32) 0 2px 16px 0;
    }
  }

  .button {
    &__close {
      font-size: 24px;
      padding: 8px;
      position: absolute;
      top: 0;
      right: 8px;
      cursor: pointer;
    }
  }

  .address {
    &__item {
      display: block;
      margin: 4px 0;
    }

    &__link {
      font-weight: bold;
      color: #2c3e50;
    }
  }

  .fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.5s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
</style>
