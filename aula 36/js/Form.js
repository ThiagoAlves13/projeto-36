class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");//caixa de texto
    this.playButton = createButton("Jogar");//botão para jogar
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");//carregar a foto com o nome do jogo
    this.greeting = createElement("h2");// mensagem de saudação
  }

  setElementsPosition() {// funcão que da posição aos objetos
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {//Função que cria um estilo para os objetos
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {// esconder os objetos
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {// mostra os objetos na tela
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed()
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide(); // esconde caixa de texto
      this.playButton.hide()//esconde botão

      var mensagem = `Olá, ${this.input.value()} </br> espere o outro jogador entrar...`

      this.greeting.html(mensagem);
    })

  }


}
