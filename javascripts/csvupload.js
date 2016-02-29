function uploadCsv(el) {
  var uploader = document.getElementById(el);
  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = e.target.result;
    var data = d3.csv.parse(contents);
    return data;
  };

  uploader.addEventListener("change", handleFiles, false);

  function handleFiles() {
    var file = this.files[0];
    reader.readAsText(file);
  }

}
