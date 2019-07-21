
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
          <div class="box__cart__produtos__produto">
            <div>
              <img src="${dados[i].image}" alt="">
            </div>
            <div class="box__cart__produtos__produto__info">
              <p>${dados[i].name.substring(0,30)} ...</p>
            <div class="box__cart__produtos__produto__info__desc">
              <span class="qtd">Qtd: ${dados[i].quantity}</span>
              <span class="price">${dados[i].bestPriceFormated}</span>
            </div>
            </div>
          </div>
        `;
        listaProdutos.innerHTML = produto;
      
        document.querySelector('.js_produtos').appendChild(listaProdutos);
        
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

       let vlTl = valorTotalFormatado.join('');

       document.querySelector('#vlTotal').innerHTML = ` R$ ${vlTl}`;

  }).catch(function(error){
      if(error){
          console.log(error)
      }
  })


  /* Action Cart */

  

