//your JS code here. If required.
let div=document.CreateElement("div");
div.id="browser-info";

document.body.append(div);

div.innerHTML="You are using "+navigator.appName+" version "+navigator.appVersion;

