let ul=document.getElementById("language");

for (var i=0; i<10; i++){
    var serial = "serial"+i;

    console.log(serial);
    serial =ul.cloneNode(true);
    document.body.appendChild(serial);
}