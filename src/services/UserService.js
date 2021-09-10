export default class {
    users = [
        {
            id: 'user',
            imageName: 'user.png',
            name: 'Thomas Fedric'
        },
        {
            id: 'user1',
            imageName: 'user1.png',
            name: 'Martin Julian'
        },
        {
            id: 'user2',
            imageName: 'user2.png',
            name: 'Dorman'
        },
    ]

    getUsers() {
        return this.users;
    }

    getUser(id) {
        return this.users.find(({ id: _id }) => _id === id)
    }
}