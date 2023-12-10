console.log('person1: show ticket')
console.log('person2: show ticket')

//using async/await //async function always return the promise
const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)

    })

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))
    const addButter = new Promise((resolve, reject) => resolve('butter'))
    const getColdDrinks = new Promise((resolve, reject) => resolve('coldirinks'))

    let ticket = await promiseWifeBringingTicket;

    console.log(`wife: i have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    let popcorn = await getPopcorn;
    console.log(`husband: i got some ${popcorn}`)
    console.log('husband: we should go in')
    console.log('wife: I need Butter on myPopcorn')

    let butter = await addButter;


    // Now create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in both async and await and also promises' code
    let coldirinks = await getColdDrinks;
    console.log(`husband: I got some ${coldirinks}`)
    console.log(`husbband : we should go in`)

    console.log(`husband: i got some ${butter} on popcorn`)
    console.log('husband: anything else darling')
    console.log(`wife: lets got we are getting late`)
    console.log('husband: thanks you for the reminder *grins*')


    return ticket
}

preMovie().then((msg) => {
    console.log(`person3: shows ${msg}`)
})


console.log('person4: show ticket')
console.log('person5: show ticket')



//simple promise functions

// const promiseWifeBringingTicket = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 3000);
// })

// const getPopcorn = promiseWifeBringingTicket.then((t) => {
//     console.log('wife: i have the tickets')
//     console.log('husband: we should go in')
//     console.log('wife: no i am hungry')
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn')
//     console.log('husband: we should go in')
//     console.log('wife: I need Butter on myPopcorn')
//     return new Promise((resolve, reject) => resolve(`${t} butter`))
// });
// getButter.then((t) => console.log(t))