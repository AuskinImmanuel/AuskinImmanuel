var req = new XMLHttpRequest()
url = "data.txt"

req.open("GET","data.txt",true)

req.send()

req.onload = function(){
    table_data = Object.values(JSON.parse(this.response));
    table =[]
    for(var i=0;i<table_data.length;i++){
        table.push(table_data[i].name)
    }
    alert(table)
}