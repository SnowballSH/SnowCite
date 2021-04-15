function cite() {
  alert(window.location.href);
  window.location.href += `cite.html?url=${get("URL")}&title=${get(
    "Title"
  )}&pub=${get("Publisher")}&first=${get("First")}&last=${get("Last")}`;
}

function get(name) {
  return encodeURIComponent(document.getElementsByName(name)[0].value);
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.error("Query variable %s not found", variable);
}

function cap(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
