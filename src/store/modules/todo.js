const state = () => ({
    tasks: []
});
const getters = {};
const actions = {
    addTask({ commit }, task) {
        commit('addTask', task);
    }
};
const mutations = {
    updateTasks(state, tasks) {
        state.tasks = tasks;
    },

    addTask(state, task) {
        state.tasks.push(task);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}