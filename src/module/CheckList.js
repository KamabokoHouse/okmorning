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

const actions = {
  init({ commit }, allCount) {
    commit("setCheckListCount", allCount);
  },
  count({ commit }, isDone) {
    if (isDone === false) {
      commit("setDoneCount", -1);
      return;
    }

    commit("setDoneCount", 1);
  },
  isDoneAll({ state }) {
    if (state.checkListCount === state.doneCheckCount) {
      return true;
    }

    return false;
  }
};

export default {
  state,
  mutations,
  actions
};
