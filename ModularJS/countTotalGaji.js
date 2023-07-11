let countGaji = (function(){
    const template = document.querySelector("#templateTotalGaji");
    let p = document.querySelector("#outputTotalGaji")

    let Gaji = []
    let totalGaji = 0
    events.on("setPekerja",setPekerja)
    events.on("addGaji", addGaji)
    events.on("deleteGaji", deleteGaji)
    events.on("tampilkanGaji", tampilkan)  

    function setPekerja(gaji){
        console.log(gaji)
        if(gaji == []){
            Gaji = [] 
        }else{
            gaji = gaji.map(x=>x.Gaji)
            Gaji = gaji
            countGajiP()
        }
    }

    function countGajiP(){
        Gaji.forEach((i) => {
            console.log(typeof i)
            totalGaji += i
        })
    }

    function addGaji(gaji){
        Gaji.push(gaji)
        totalGaji += gaji
    }

    function deleteGaji(index){
        totalGaji -= Gaji[index]
        Gaji.splice(index,1)
    }

    function tampilkan(){
        console.log(Gaji)
        var data = {
            totalGaji : totalGaji
        }
        console.log(totalGaji)
        render = Mustache.render(template.innerHTML, data);
        p.innerHTML = render
    }
})()