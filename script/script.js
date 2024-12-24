const data = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "Admin"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "Editor"
    },
    {
        "id": 3,
        "name": "Robert Brown",
        "email": "robert.brown@example.com",
        "role": "Author"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "role": "Subscriber"
    },
    {
        "id": 5,
        "name": "Michael Wilson",
        "email": "michael.wilson@example.com",
        "role": "Admin"
    }
]
let tbody = document.querySelector('#row-data')
const searchInput = document.getElementById('searchInput')



let get_row = function(d){
    return `
        <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.role}</td>
            <td><span class="badge bg-success">Active</span></td>
        </tr>
    `
}

function display(tab){
    tbody.innerHTML = ""
    tab.forEach(row => {
        tbody.innerHTML += get_row(row)
    });
}

function search(data,query){
    // console.log(data,query);
    return data.filter(item => item.name.toUpperCase().includes(query.toUpperCase()));
}


display(data)

searchInput.addEventListener('keyup',()=>{
    const data_filter = search(data,searchInput.value)
    if (data_filter.length > 0) {
        display(data_filter)
    }else{
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;"><h1>Not Found</h1></td></tr>`
    }
    
})
// console.log((search(data,'J')));
