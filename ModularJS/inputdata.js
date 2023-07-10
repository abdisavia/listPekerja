var pekerja = (function(){
        let Pekerja = [{Nama : "abdi", Gaji : 1}]
        let inputGaji = document.querySelector("#inputGaji")
        let inputNama = document.querySelector("#inputName")
        let btnSubmit = document.querySelector("#btnSubmit")
        let template = document.querySelector("#template")
        let table = document.querySelector("#output")
        let tbody = table.querySelector("#body")
        let gaji = Pekerja.map(p => p.Gaji);
        countGaji.setPekerja(gaji)
        countGaji.countGaji()

        btnSubmit.addEventListener('click', pushKePekerja)
        //delegate multiple button
        tbody.addEventListener('click', function(e) {
            if(e.target.nodeName = "BUTTON"){
                deletePekerja(e)
            }
        })
        _tampilkan()
        
      function pushKePekerja(nama,gaji){
        if((!(/\d/.test(inputNama.value) || /\d/.test(nama)))){
            let obj = {}
            let Nam = (typeof nama === "string") ? nama : inputNama.value
            let Gaj = (typeof gaji === "number") ? gaji : parseInt(inputGaji.value)    
            obj.Nama = Nam
            obj.Gaji = Gaj 
            Pekerja.push(obj)
            countGaji.addGaji(obj.Gaji)
            _tampilkan()
        }else{
            alert("Masukkan Data dengan benar!")
            inputNama.value =""
            inputGaji.value =""
        }

      }

     function deletePekerja(value){
        let i;
        if(typeof value === "number"){
            i = value
        }else{
            //find the closest tr element from e.target
            i = value.target.closest("tr")
            //removing a child from tbody
            let parent = tbody;
            let index = Array.prototype.indexOf.call(parent.children, i)
            tbody.removeChild(i)
            i = index;
        }
        countGaji.deleteGaji(i);
        Pekerja.splice(i,1)
        _tampilkan()
    }
    
    function _tampilkan(){
        if(Pekerja.length != 0){
            console.log(Pekerja.map(x=>x.Nama))
            var data = {
                pekerja : Pekerja,
                Nama : Pekerja.Nama,
                Gaji : Pekerja.Gaji
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