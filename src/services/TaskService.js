import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from '../firebase';

export default class TaskService {
    docRef = null

    constructor(status) {
        this.docRef = doc(db, "tasks", status);
    }

    async getTasks() {
        const docSnap = await getDoc(this.docRef);
        return docSnap.data().tasks;
    }

    updateTasks(tasks) {
        updateDoc(this.docRef, { tasks });
    }
}