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
tbody.innerHTML = ""

let get_row = function(d){
    return `
        <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.role}</td>
            <td><span class="badge bg-success">Active</span></td>
        </tr>`
}

function display(tab){
    tab.forEach(row => {
        tbody.innerHTML += get_row(row)
    });
}

display(data)
