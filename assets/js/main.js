
axios.get('http://127.0.0.1:5500/assets/js/products.json')
  .then(function(response){
      // console.log(dados);
      let dados = response.data.cart.item;
    
      for (let i = 0; i < dados.length; i++) {
        // let li = document.createElement('li');
        // let tela = document.querySelector('#tela').appendChild(li).innerHTML = dados[i].name;
        
        let listaProdutos = document.createElement('div');

        let produto = 
        `
          <div class="produto">
            <img src="${dados[i].image}" alt="">
            <p>${dados[i].name.substring(0,30)} ...</p>
          </div>
        `;
        listaProdutos.innerHTML = produto;
      
        document.querySelector('.produtos').appendChild(listaProdutos);
        
      }
      let valorTotal = [];
      dados.forEach(dado => {
        valorTotal.push(dado.bestPrice);
        // console.log(valorTotal);        
      });

      
      valorTotal = valorTotal.reduce( (a,b)  => a + b,0);
      let valorTotalFormatado = valorTotal.toString().split('',-1);        
      valorTotalFormatado.splice(2,0,'.');
      valorTotalFormatado.splice(6,0,',');
      console.log(`R$ ${valorTotalFormatado.join('')}`);
      
  })
  .catch(function(error){
      if(error){
          console.log(error)
      }
  })
