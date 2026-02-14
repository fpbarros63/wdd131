const products = [
    { id: "fc-1888", name: "computador" },
    { id: "fc-2050", name: "celular" },
    { id: "fs-1987", name: "tablet" },
    { id: "ac-2000", name: "monitor" },
    { id: "jj-1969", name: "teclado" },
];

const select = document.getElementById("productName");

products.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    select.appendChild(opt);
});


