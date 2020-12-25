<template>
  <v-container>
    See our coders:
    <v-btn :to="'/Denisa'" text>
      Denisa
    </v-btn>
    <v-btn :to="'/Mugur'" text>
      Mugur
    </v-btn>
    <v-btn :to="'/Narcisa'" text>
      Narcisa
    </v-btn>
    <v-btn :to="'/Madalina'" text>
      Madalina
    </v-btn>

    Filter by author:
    <v-chip
      color="orange"
      link
      @click="toggleSelected('mugur')"
      :outlined="!isSelected('mugur')"
      >Mugur</v-chip
    >
    <v-chip
      color="pink"
      link
      @click="toggleSelected('narcisa')"
      :outlined="!isSelected('narcisa')"
      >Narcisa</v-chip
    >
    <v-chip
      color="red"
      link
      @click="toggleSelected('madalina')"
      :outlined="!isSelected('madalina')"
      >Madalina</v-chip
    >
    <v-chip
      color="blue"
      link
      @click="toggleSelected('denisa')"
      :outlined="!isSelected('denisa')"
      >Denisa</v-chip
    >
  </v-container>
</template>

<script>
export default {
  name: "Homepage",

  data: () => ({
    selectedAuthors: [],
  }),
  computed: {
    templatesData() {
      return this.$store.getters.templatesData;
    },
  },
  methods: {
    isSelected(name) {
      return this.selectedAuthors.includes(name);
    },
    toggleSelected(name) {
      if (this.selectedAuthors.includes(name)) {
        this.selectedAuthors.splice(this.selectedAuthors.indexOf(name), 1);
      } else {
        this.selectedAuthors.push(name);
      }
    },
  },
};
</script>
