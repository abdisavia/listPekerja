(function(){
    var pekerja = {
        Pekerja :[{"Nama" : "abdi", "Gaji" : "20000000"}],
        init : function(){
            this.tempDOM()
            this.aksi()
            this.tampilkan()
        },
        tempDOM : function(){
            this.inputGaji = document.querySelector("#inputGaji")
            this.inputNama = document.querySelector("#inputName")
            this.btnSubmit = document.querySelector("#btnSubmit")
            this.template = document.querySelector("#template")
            this.table = document.querySelector("#output")
            this.tbody = this.table.querySelector("#body")
            this.tr = this.tbody.querySelectorAll("tr")
            this.btnDelete = document.querySelectorAll(".delete")
        },
        pushKePekerja : function(){
            let obj = {}
            obj["Nama"] = this.inputNama.value
            obj["Gaji"] = this.inputGaji.value
            this.Pekerja.push(obj)
            this.tampilkan()
        },
        deletePekerja : function(e,parent){
            var i = e.target.closest("tr")
            parent.removeChild(i)
            this.Pekerja.splice(0,1)
            this.tampilkan()
        },
        aksi : function(){
            this.btnSubmit.addEventListener('click', this.pushKePekerja.bind(this))
            this.tbody.addEventListener('click', function(e) {
                if(e.target.nodeName = "BUTTON"){
                    this.deletePekerja(e,this.tbody)
                }
            }.bind(this))
        },
        tampilkan : function(){
            if(this.Pekerja.length != 0){
                var data = {
                    pekerja : this.Pekerja,
                    Nama : this.Pekerja["Nama"],
                    Gaji : this.Pekerja["Gaji"]
                }
                this.tbody.innerHTML = Mustache.render(this.template.innerHTML, data)
                this.inputNama.value = ""
                this.inputGaji.value = ""
            }
        },
    }
    pekerja.init();
})()