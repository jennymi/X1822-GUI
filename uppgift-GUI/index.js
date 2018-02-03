var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        var notes = JSON.parse(xhttp.response);
        for (i = 0; i < notes.length; i++) {
            var note = notes[i];
            document.getElementById('notes').innerHTML += '<option value="' + JSON.stringify(note._id) +
                '">' + JSON.stringify(note.title) + '</option>';
        }
        //document.getElementById('notes').innerHTML = xhttp.response;
    };
};
xhttp.open("GET", "http://localhost:8088/nodes", true);
xhttp.send();