 // type conversion
        // implicit can automatically convert in to string 

        let aa =10;
        let ba = aa.toString()
        document.getElementById("demo").innerHTML= ba + "  this is  convertezd into string"

        let ca = String(aa)
        let d = ca + 1212
 
        document.write(typeof(d) + " this is a value " + d )