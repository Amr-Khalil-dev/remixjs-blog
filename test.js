
// const f = async () => {
  
// }

// f();


(async () => {
    const data1 = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))
    const data2 = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))
    const data3 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log("1")
    console.log("2")
    console.log("3")
    console.log("4")
})()