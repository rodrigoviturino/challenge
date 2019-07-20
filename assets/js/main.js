
// const url = 'products.json';
// axios(url).then(resp => {
//     // Data já retorna o json convertido em objeto
//     const itens = resp.data.reduce(
//         (html,estado) => html + `<li>${estado.cart.item[0].name}</li>`, ''
//     )

//     document.body.insertAdjacentHTML('beforeend', `<ul>${itens}</ul>`)
// });

axios.get('http://127.0.0.1:5500/challenge/assets/js/products.json')
  .then(function(response){
      // console.log(dados);
      let dados = response.data.cart.item;
    
      for (let i = 0; i < dados.length; i++) {

        let t = document.createElement('li');
        let tt = document.querySelector('#tela').appendChild(t).innerHTML = dados[i].name;
        
    }
    // console.log(response.status); // ex.: 200
  })
  .catch(function(error){
      if(error){
          console.log(error)
      }
  })
