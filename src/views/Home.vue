<template>
  <div>
    <section>
      <article v-for="check in checkList" :key="check.id">
        <check-item :check="check"></check-item>
      </article>
    </section>
  </div>
</template>

<script>
import CheckItem from "@/components/CheckItem.vue";

export default {
  name: "Home",
  components: {
    CheckItem
  },
  data() {
    return {
      checkList: []
    };
  },
  mounted() {
    this.setCheckList();
  },
  methods: {
    setCheckList: function() {
      import("@/assets/morning.json").then(morningList => {
        this.checkList = morningList.default;
      });
    }
  }
};
</script>
