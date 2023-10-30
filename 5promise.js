let posts = [
    {
        title: 'create post',
        createdAt: new Date().getTime(),
    },
];
console.log('Before created a user', posts);
let LastUserActivityTime = new Date().getTime()

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({
                title: 'create new post',
                createdAt: new Date().getTime(),
            });
            resolve(posts);
        }, 2000)
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            LastUserActivityTime = new Date().getTime()

        }, 1000)
        resolve(LastUserActivityTime);
    });
}
function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletePost = posts.pop()
                resolve(deletePost)
            } else {
                reject('Error: posts are Empty')
            }
        }, 4000)
    })
}


Promise.all([createPost(), updateLastUserActivityTime()]).then(([msg, timestamp]) => {
    console.log('Before create user lastActivetime', new Date(timestamp))
    console.log('created new user', msg)
    console.log('After create user lastActivetime', new Date(LastUserActivityTime))


    deletePost().then((posts) => {
        console.log('Remaining posts', posts)
    })
})
// deletePost().then((posts) => {
//     console.log('remaining posts', posts)
// }).catch((rej) => console.log(rej))
