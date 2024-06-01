

const fetchData = ()=>{
    let tbody = document.getElementById('tbody');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost/push&pull/search.php');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            tbody.innerHTML = '';
            response.forEach(element => {
                tbody.innerHTML += `
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.decs}</td>
                        <td>
                            <button class='btn btn-danger ' id="delete" 
                            onclick="DeleteProject(${element.id})"
                            >Delete</button>
                        </td>
                    </tr>
                `
            });
        }
    };
    xhr.send();
}

fetchData();




let input = document.getElementById('search');
input.addEventListener('keyup', ()=>{
    let tbody = document.getElementById('tbody');
    let search =  document.getElementById('search').value;
    setTimeout(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://localhost/push&pull/search.php?name=${search}`);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                response.forEach(element => {
                    tbody.innerHTML = `
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.decs}</td>
                            <td>
                                <button class='btn btn-danger ' id="delete" 
                                    onclick="DeleteProject(${element.id})"
                                >Delete</button>
                            </td>
                        </tr>
                    `
                });
            }
        }
        xhr.send();
    }, 4000);
})

// delete project 


function DeleteProject(id){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost/push&pull/delete.php?id=${id}`);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if(response.status == 'success'){
                alert('Project Deleted');
                fetchData();
            }
            else{
                alert('Something went wrong');
            }
        }
    }
    xhr.send();
}