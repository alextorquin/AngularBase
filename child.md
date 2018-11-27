# app-root (vista => controlador = > servicio)
  ## app-header 
  ## router-outlet
    ### app-page-container (vista => controlador)
      v @input    ^@output
      #### app-presenter1
      #### app-presenter2



subject(unaVariable)
  .next(2)
  .asObservable().subscribe(dato=>)
ReDux


vista html + directivas (@viewChild) + pipes 


vista1 <=>
  controlador1



class Parent{
  Child hijo = new Child(this);
  
  constructor(){
    hijo.cry();
  }

  trabajar(){
    hijo.cry();
  }
}

class Child{
  Parent parent;
  
  constructor(parent){
    this.parent=parent;
  }
  
  cry(){
    parent.trabajar();
  }
}



var vista1 = new vista();
vista1.controller = new controlador1();
vista1.template.elements=[];
vista1.template.elements.push('div');
vista1.template.elements.push(new vista2());

vista2.controller = new controlador2();



v1 [datos] (eventos) c1 s1.next()



v2 c2 s1.subscribe()


v1
  c1
  v2
    c2
      s0
  v2
    c2
      s0
  v3
    c3
      s0
