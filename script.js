function run()
{
  let htmlCode=document.getElementById("html-code");
  let CssCode=document.getElementById("css-code");
  let JavaScriptCode=document.getElementById("JavaScript-code");
  let output=document.getElementById("output"); 
  output.contentDocument.body.innerHTML=htmlCode.value+"<style>"+CssCode.value+"</style>";
  output.contentWindow.eval(JavaScriptCode.value);
}
