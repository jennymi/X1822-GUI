var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.response);

        var inData = JSON.parse(xhttp.response);
        console.log(inData[0].title);

        ko.applyBindings(new viewModel(inData));
        console.log(document.getElementById('dropdown').value);
    };
};

xhttp.open("GET", "http://localhost:8088/nodes", true);
xhttp.send();

var viewModel = function (data) {
    this.notes = ko.observableArray(data);

    this.note = {
        _id: ko.observable(''),
        title: ko.observable(''),
        text: ko.observable('')
    }
}

function showNote() {
    var element = document.getElementById('dropdown');
    document.getElementById('noteTitle').value = element.options[element.selectedIndex].text;
    document.getElementById('noteBody').value = element.options[element.selectedIndex].value;
}
