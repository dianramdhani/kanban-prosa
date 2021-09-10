export default class {
    tags = [
        {
            name: 'RESEARCH',
            classBackground: 'bg-primary'
        },
        {
            name: 'BACKEND',
            classBackground: 'bg-secondary'
        },
        {
            name: 'DESIGN',
            classBackground: 'bg-info'
        },
    ]

    getTags() {
        return this.tags;
    }

    getClassBackground(name) {
        return this.tags.find(({ name: _name }) => _name === name).classBackground;
    }
}