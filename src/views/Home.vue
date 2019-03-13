<template>
  <div>
    <section>
      <article>
        <el-row v-for="check in checkList" :key="check.id">
          <check-item :check="check"></check-item>
        </el-row>
      </article>
    </section>
    <section>
      <article>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-button
              type="success"
              icon="el-icon-check"
              round
              @click="complete"
            >
              全部終わりました！
            </el-button>
          </el-col>
        </el-row>
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
    },
    complete: function() {
      location.href =
        "https://twitter.com/share?text=朝の準備が終わったよ&url=https://goodmorning-dev.firebaseapp.com&hashtags=goodMorning&lang=ja";
    }
  }
};
</script>
