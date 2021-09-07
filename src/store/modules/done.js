const state = () => ({
    tasks: []
});
const getters = {};
const actions = {
    addTask({ commit }, task) {
        commit('addTask', task);
    },

    log(event) {
        console.log(event, 'done');
    }
};
const mutations = {
    updateTasks(state, tasks) {
        state.tasks = tasks;
    },

    addTask(state, task = { title, tags, assignee, start_date, end_date }) {
        task['issue_id'] = Math.floor(Math.random() * 100);
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