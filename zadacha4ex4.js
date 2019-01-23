for (var ptag of document.getElementsByTagName('p')) {
  var hr = document.createElement('hr');
  ptag.insertAdjacentElement('afterend', hr);
}