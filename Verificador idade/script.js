function verificar(){
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('ano')
  let res = document.getElementById('res')
  if(fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
      genero = 'Homem'
      document.body.style.backgroundColor = '#6AA7FC'
      if(idade >=0 && idade < 10){
        //criança
        img.src = 'imagens/crianca_homem.jpg'
      }else if (idade < 21){
        //jovem
        img.src = 'imagens/jovem_homem.jpg'
      }else if(idade < 55){
        //adulto
        img.src = 'imagens/adulto_homem.jpg'
      }else{
        //idoso
        img.src = 'imagens/idoso_homem.jpg'
      }
    }else if(fsex[1].checked){
      genero = 'Mulher'
      document.body.style.backgroundColor = '#DA53FA'
      if(idade >=0 && idade < 10){
        //criança
        img.src = 'imagens/crianca_mulher.jpg'
      }else if (idade < 21){
        //jovem
        img.src = 'imagens/jovem_mulher.jpg'
      }else if(idade < 55){
        //adulto
        img.src = 'imagens/adulto_mulher.jpg'
      }else{
        //idoso
        img.src = 'imagens/idosa_mulher.jpg'
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}