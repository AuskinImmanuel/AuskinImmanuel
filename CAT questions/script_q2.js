var req = new XMLHttpRequest()
url = "file: data.txt"

req.open("GET","data.txt",true)

req.send()

req.onload = function(){
    table_data = Object.values(JSON.parse(this.response));
    table_name =[]
    table_roll =[]
    table_marks =[]

    for(var i =0;i<table_data.length;i++){
        var output=""
        output+="<table border=1><tr><th>Name</th></tr>"

        document.getElementById("out").innerHTML=output
        
        table_name.push(table_data[i].name)
        table_roll.push(table_data[i].roll)
        table_marks.push(table_data[i].mark)

        names = document.createElement("tr")
        names.innerHTML = table_data[i].name
        document.body.appendChild(names)    

        header = document.createElement("tr")
        header.innerHTML = table_data[i].roll
        document.body.appendChild(header) 

        header = document.createElement("tr")
        header.innerHTML = table_data[i].mark
        document.body.appendChild(header) 
    }
    // alert(table)
}