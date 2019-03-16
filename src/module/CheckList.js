const state = {
  checkListCount: 0,
  doneCheckCount: 0
};

const mutations = {
  setCheckListCount(state, { allCount }) {
    state.checkListCount = allCount;
  },
  setDoneCount(state, { count }) {
    state.doneCheckCount += count;
  }
};

const getters = {
  isDoneAll(state) {
    if (state.checkListCount === state.doneCheckCount) {
      return true;
    }

    return false;
  }
};

const actions = {
  init({ commit }, allCount) {
    // eslint-disable-next-line no-console
    console.log();
    commit("setCheckListCount", { allCount });
  },
  done({ commit }, isDone) {
    if (isDone === false) {
      commit("setDoneCount", { count: -1 });
      return;
    }

    commit("setDoneCount", { count: 1 });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
