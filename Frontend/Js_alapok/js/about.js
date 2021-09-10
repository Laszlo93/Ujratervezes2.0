{/* <tr>
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
            <button class="btn-info btn"><i class="fas fa-sync-alt"></i></button>
            <button class="btn-danger btn"><i class="fas fa-trash-alt"></i></button>                                    </button>
    </div>
</td>
</tr > */}

let users = [
    { surname: "Berger", firstname: "Whitney", age: 22 },
    { surname: "Nagy", firstname: "Árpi", age: 36 },
    { surname: "Kiss", firstname: "Bence", age: 55 },
    { surname: "Doe", firstname: "John", age: 90 },
    { surname: "Jack", firstname: "Vadölő", age: 39 },
    { surname: "Rostás", firstname: "Péter", age: 42 },
    { surname: "Fehér", firstname: "Péter", age: 16 },
    { surname: "Piros", firstname: "Gizella", age: 24 },
];
let tabelBody = document.querySelector("#userTable tbody");
let createTd = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
}
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}
for (let k in users) {
    let tr = document.createElement("tr");
    createTd(parseInt(k)+1, tr)
    for (let value of Object.values(users[k])) {
        createTd(value, tr);
    }
    createButtonGroup(tr);
    tabelBody.appendChild(tr);
}