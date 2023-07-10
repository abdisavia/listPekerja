var pekerja = (function(){
    let Pekerja = [{"Nama" : "abdi", "Gaji" : "20000000"}]
    
        let inputGaji = document.querySelector("#inputGaji")
        let inputNama = document.querySelector("#inputName")
        let btnSubmit = document.querySelector("#btnSubmit")
        let template = document.querySelector("#template")
        let table = document.querySelector("#output")
        let tbody = table.querySelector("#body")
        let tr = document.querySelectorAll("tr")
        let btnDelete = document.querySelectorAll(".delete")

        btnSubmit.addEventListener('click', pushKePekerja)
        //delegate multiple button
        tbody.addEventListener('click', function(e) {
            if(e.target.nodeName = "BUTTON"){
                deletePekerja(e)
            }
        })
        _tampilkan()

      function pushKePekerja(nama,gaji){
        let obj = {}
        let Nama = (typeof nama === "string") ? nama : inputNama.value
        let Gaji = (typeof gaji === "string") ? gaji : inputGaji.value
        obj["Nama"] = Nama
        obj["Gaji"] = Gaji
        Pekerja.push(obj)
        _tampilkan()
      }

     function deletePekerja(value){
        var i;
        if(typeof value === "number"){
            i = value
        }else{
            //find the closest tr element from e.target
            i = value.target.closest("tr")
            //removing a child from tbody
            tbody.removeChild(i)

            let parent = tbody;
            let index = Array.prototype.indexOf.call(parent.children, i)
            i = index;
        }
        Pekerja.splice(i,1)
        _tampilkan()
    }
    
    function _tampilkan(){
        if(Pekerja.length != 0){
            var data = {
                pekerja : Pekerja,
                Nama : Pekerja["Nama"],
                Gaji : Pekerja["Gaji"]
            }
            tbody.innerHTML = Mustache.render(template.innerHTML, data)
            inputNama.value = ""
            inputGaji.value = ""
        }
    }
    return {
        tambahPekerja : pushKePekerja,
        deletePekerja : deletePekerja
    }
})();