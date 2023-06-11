
  //To connect JSON file from github
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","https://raw.githubusercontent.com/feelthevenom/JsonTest/main/detail.json",false);
    xmlhttp.send();
    if(xmlhttp.readyState===4 && xmlhttp.status===200)
    {
        var result=xmlhttp.responseText;
        var out=JSON.parse(result);
        
    }
    export default out;