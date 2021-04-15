window.onload = () => {
  let url = getQueryVariable("url");
  let title = getQueryVariable("title");
  let pub = getQueryVariable("pub");
  let first = getQueryVariable("first");
  let last = getQueryVariable("last");

  let t1 = `${cap(last)}, ${cap(first)}. <i>${title}</i>. `;
  let tb = pub ? `${pub}` : "";
  let t2 = url ? `, <a href="${url}">${url}</a>` : "";

  document.getElementById("area").innerHTML =
    "<b>Your MLA8 cited text:</b><br>" + t1 + tb + t2 + ".";
};
