const data = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "role": "Admin",
        "status": {
            "text": "Active",
            "class": "bg-success"
        }
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "role": "Editor",
        "status": {
            "text": "Pending",
            "class": "bg-warning"
        }
    },
    {
        "id": 3,
        "name": "Robert Brown",
        "email": "robert.brown@example.com",
        "role": "Author",
        "status": {
            "text": "Inactive",
            "class": "bg-danger"
        }
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "role": "Subscriber",
        "status": {
            "text": "Active",
            "class": "bg-success"
        }
    },
    {
        "id": 5,
        "name": "Michael Wilson",
        "email": "michael.wilson@example.com",
        "role": "Admin",
        "status": {
            "text": "Inactive",
            "class": "bg-danger"
        }
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
            <td><span class="badge ${d.status.class}">${d.status.text}</span></td>
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
    return data.filter(item => 
        item.name.toUpperCase().includes(query.toUpperCase()) ||
        item.email.toUpperCase().includes(query.toUpperCase())
    );
}


display(data)

searchInput.addEventListener('input',()=>{
    const data_filter = search(data,searchInput.value)
    if (data_filter.length > 0) {
        display(data_filter)
    }else{
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;"><h1>Not Found</h1></td></tr>`
    }
    
})
// tsy afaka asorina eto ireto fa tsy mandeha ilay izy inona no antony
const roles = document.getElementById("categoryFilter");
const _status = document.getElementById("statusFilter");
const rowData = document.getElementById("row-data");
const rows = rowData.querySelectorAll("tr");

function category(items,index){
    items.addEventListener("change", function filterByCategory() {
        const selectedCategory = items.value; // Get selected category

        rows.forEach(row => {
            const item = row.cells[index].textContent; // Get the role column (4th column)
            if (selectedCategory === "" || item === selectedCategory) {
                row.style.display = ""; // Show row
            } else {
                row.style.display = "none"; // Hide row
            }
        });
    });

}
category(roles,3)
category(_status,4)
// _status()
