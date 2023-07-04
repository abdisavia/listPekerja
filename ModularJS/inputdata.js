(function(){
    var pekerja = {
        Pekerja :[],
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
            this.btnDelete = this.tbody.querySelectorAll(".delete")
        },
        pushKePekerja : function(){
            let obj = {}
            obj["Nama"] = this.inputNama.value
            obj["Gaji"] = this.inputGaji.value
            this.Pekerja.push(obj)
            this.tampilkan()
        },
        deletePekerja : function(){
            console.log("button delete clicked : " + this.btnDelete)
        },
        aksi : function(){
            this.btnSubmit.addEventListener('click', this.pushKePekerja.bind(this))
            if(this.Pekerja.length != 0){
                console.log(this.btnDelete)
                this.btnDelete.foreach((e) => {
                    e.addEventListener('click', this.deletePekerja.bind(this))
                })
            }
        },
        tampilkan : function(){
            if(this.Pekerja.length != 0){
                var data = {
                    pekerja : this.Pekerja,
                    Nama : this.Pekerja["Nama"],
                    Gaji : this.Pekerja["Gaji"]
                }
                this.tbody.innerHTML = Mustache.render(this.template.innerHTML, data)
            }
        },
    }
    pekerja.init();
})()