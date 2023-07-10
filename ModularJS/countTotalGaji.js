let countGaji = (function(){
    const template = document.querySelector("#templateTotalGaji");
    let p = document.querySelector("#outputTotalGaji")

    let Gaji = []
    let totalGaji
    
    function setPekerja(gaji){
        Gaji = gaji 
        totalGaji = 0
    }

    function countGajiP(){
        Gaji.forEach((i) => {
            console.log(i)
            totalGaji += i
        })
        _tampilkan()
    }

    function addGaji(gaji){
        Gaji.push(gaji)
        totalGaji += gaji
        _tampilkan()
    }

    function deleteGaji(index){
        totalGaji -= Gaji[index]
        Gaji.splice(index,1)
        _tampilkan()
    }

    function _tampilkan(){
        var data = {
            totalGaji : totalGaji
        }
        console.log("executed")
        render = Mustache.render(template.innerHTML, data);
        p.innerHTML = render
    }
    return {
        setPekerja : setPekerja,
        countGaji : countGajiP,
        addGaji : addGaji,
        deleteGaji : deleteGaji
    }
})()