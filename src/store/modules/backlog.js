import { uuid } from 'vue-uuid';
import TaskService from '../../services/TaskService';

const taskService = new TaskService('backlog');

const state = () => ({
    tasks: []
});
const getters = {};
const actions = {
    async addTask({ commit, state }, task) {
        task['issue_id'] = uuid.v1();
        commit('addTask', task);
        await taskService.updateTasks(state.tasks);
    },

    async fetchTasks({ commit }) {
        const tasks = await taskService.getTasks();
        commit('updateTasks', tasks);
    },
};
const mutations = {
    updateTasks(state, tasks) {
        state.tasks = tasks;
        taskService.updateTasks(state.tasks);
    },

    addTask(state, task = { title, tags, assignee, start_date, end_date, issue_id }) {
        state.tasks.push(task);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}