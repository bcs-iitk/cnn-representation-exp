function doGet() {
  var webpages = [];
  //---------------just change the webpage URLs
  //the webpages need to hosted on https sites - if you want more than two just create a new line using the same code as below
  //just change the link to the google form
  webpages.push("https://forms.gle/UL7b9gsGZSAnqWxx5");
  webpages.push("https://forms.gle/zmFELaqYpUCgyrzu5");
  webpages.push("https://forms.gle/mKakMCNzAnCRZkNv6");
  webpages.push("https://forms.gle/C4Xymbgjpi3BipARA");
  webpages.push("https://forms.gle/igQAx9dQKNV1hzxY6");
  webpages.push("https://forms.gle/Akbi3Dfz6SXbGaEd8");
  webpages.push("https://forms.gle/aG4YxeqvNnExBZX77");
  webpages.push("https://forms.gle/JbuQBSURYoNCAndo9");
  webpages.push("https://forms.gle/DGx36XY8zT7vX3d29");
  webpages.push("https://forms.gle/nTomMJRAEPdzmFdT9");
  //------------------------------------------
  var random_page = Math.floor(Math.random()*webpages.length);
  var redirect = webpages[random_page];
  return HtmlService.createHtmlOutput("<script>window.open('" + redirect + "', '_top');</script>");
  //line below requires authorisation but also works - thanks Nikolai Cook
  //return HtmlService.createHtmlOutput(UrlFetchApp.fetch(redirect));
}
