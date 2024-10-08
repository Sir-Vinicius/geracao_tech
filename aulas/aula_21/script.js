let api = fetch('https://randomuser.me/api/?results=10');
console.log(api);

fetch('https://randomuser.me/api/?results=10')
.then( response => response.json())
.then(data => console.log(data.results[2].name))
.then(data => {
let tableContent = document.getElementById('tableContent')
data.result.map((i) => {
    tableContent.innerHTML +=
    `
    <tr>
        <td>${i.name.title}</td>
        <td>${i.name.first}</td>
        <td>${i.name.last}</td>
    </tr>
    `
})
})
