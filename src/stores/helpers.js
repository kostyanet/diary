export function getRandomString() {
    return Math.random().toString(36).substring(2);
}

function makeComments() {
    const arr =[];

    for (let i = 0; i < 132; i++) {
        arr.push({
            message:    lorem,
            id:         getRandomString(),
        });
    }

    return arr;
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam architecto consequatur cumque doloremque eos exercitationem expedita inventore, laborum maiores maxime nihil odio officia.';

export const fakeItems = [
    {
        id:         getRandomString(),
        title:      'First item with custom name',
        comments:   makeComments()
    }, {
        id:         getRandomString(),
        title:      'Second item is active',
        comments: [
            {
                message:    lorem,
                id:         getRandomString(),
            }, {
                message:    lorem,
                id:         getRandomString(),
            }, {
                message:    Array(3).fill(lorem).join(' '),
                id:         getRandomString(),
            }
        ]
    }
];
