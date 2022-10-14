const fetchPokemon=() =>{
    const pokename=document.getElementById("pokename");
    let pokeinput=pokename.value.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res)=>{
        if (res.status !="200")
        {
            console.log(res);
            pokeimage("./IMG/sad.png");
        }
        else{
            return res.json();
        }
    }).then((data)=> {
        console.log(data);
        let pokeimg = data.sprites.front_default;
        console.log(pokeimg);
        pokeimage(pokeimg);

        let pname=data.name;
        console.log(pname);
        PName(pname);

        let type=data.types[0].type.name;
        console.log(type);
        PType(type);
        document.getElementById("type").textContent=("Type: " + `${type}`);
        //Estadisticas ********************************************
        let hp=data.stats[0].base_stat;
        console.log(hp);
        HP(hp);
        document.getElementById("hp").textContent= ("Hp: " +`${hp}`);

        let attack=data.stats[1].base_stat;
        console.log(attack);
        At(attack);
        document.getElementById("attack").textContent= ("Attack: " +`${attack}`);

        let defense=data.stats[2].base_stat;
        console.log(defense);
        Df(defense);
        document.getElementById("defense").textContent= ("Defense: " +`${defense}`);

        let special_a=data.stats[3].base_stat;
        console.log(special_a);
        Sa(special_a);
        document.getElementById("special-a").textContent= ("Special Attack: " +`${special_a}`);

        let special_d=data.stats[4].base_stat;
        console.log(special_d);
        Sd(special_d);
        document.getElementById("special-d").textContent= ("Special Defense: " +`${special_d}`);

        let speed=data.stats[5].base_stat;
        console.log(speed);
        Sp(speed);
        document.getElementById("speed").textContent= ("Speed: " +`${speed}`);

        graphicstats(hp,attack,defense,special_a,special_d,speed);
         //*******************************************************/
    })
}

const pokeimage=(url) => {
    const pokeimg=document.getElementById("pokeimg");
    pokeimg.src =url;
}
const PName=(url) => {
    const pname=document.getElementById("pname");
    pname.innerHTML=url;
}
const PType=(url) => {
    const type=document.getElementById("type");
    type.innerHTML =url;
}
//Estadisticas***************************************************
const HP=(url) => {
    const hp=document.getElementById("hp");
    hp.innerHTML =url;
}
const At=(url) => {
    const attack=document.getElementById("attack");
    attack.innerHTML =url;
}
const Df=(url) => {
    const defense=document.getElementById("defense");
    defense.innerHTML =url;
}
const Sa=(url) => {
    const special_a=document.getElementById("special-a");
    special_a.innerHTML =url;
}
const Sd=(url) => {
    const special_d=document.getElementById("special-d");
    special_d.innerHTML =url;
}
const Sp=(url) => {
    const speed=document.getElementById("speed");
    speed.innerHTML =url;
}
//*************************************************************/
