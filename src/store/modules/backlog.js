const state = () => ({
    tasks: [
        {
            issue_id: 1,
            title: "Improve accuracy of voice-to-text model",
            assignee: "String",
            start_date: new Date("07-09-2021 11:50"),
            end_date: new Date("07-09-2021 11:50"),
            tags: "RESEARCH",
        },
        {
            issue_id: 2,
            title: "Create API to load user info from database",
            assignee: "String",
            start_date: new Date("07-09-2021 11:50"),
            end_date: new Date("07-09-2021 11:50"),
            tags: "BACKEND",
        },
    ]
});
const getters = {};
const actions = {
    addTask({ commit }, task) {
        commit('addTask', task);
    },

    log({ }, event) {
        console.log(event, 'backlog');
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