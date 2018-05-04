# Aplicacao TODO List com Angular2

#  O site aonde segui as lições é o 

* > https://www.sitepoint.com/angular-2-tutorial/
* Umas das maneiras mais fácil de criar um projeto com Angular é utilizar o **Angular-CLI**
* * commando-line interface
* Para instalar o **Angular-CLI**, precisamos:
* * Ter o NodeJS instalado
* * Rodar o comando:
* * > **npm install -g angular-cli**
* * * O **-g** significa que esse pacote será instalado globalmente
* Com o Angular-CLI instalado, podemos criar o nosso projeto utilizando o mesmo.
* * Criamos um projeto com o comando: **ng new todo-app**
* * Será criado toda uma estrutura de pastas e arquivos que um projeto Angular 2 precisa ter
* * Podeos verificar se o projeto foi criado corretamente com o comando **ng serve** que irá inicializar o servidor do Angular e subir o projeto
* * O link padrão é o **http://localhost:4200/**
* * O servidor do Angular possui o **live reload** que é um recurso que atualiza o servidor automaticamente assim que um arquivo é atualizado

# Criando uma class

* O Angular 2 utiliza **TypeScript** e com isso podemos criar uma classe para representar o TODO
* Para criar uma classe utilizando o **Angular-CLI**, utilizamos o comando:
* * > **ng generate class Todo  --spec**
* * Com isso será gerado um arquivo **todo.ts**
```
export class Todo {
    id: number;
    titulo: string = '';
    completo: boolean = false;

    constructor(values : Object = {}){
        Object.assign(this, values);
    }
}
``` 

* Agora que temos nossa classe com atributos, podemos criar testes unitários para testar a lógica do construtor. Os testes ficam no arquivo **todo.spec.ts** que foi criado com o comando **ng generate class Todo --spec**
```
import { Todo } from './todo';

describe('Todo', () => {
    it('should create an instance', () =>{
        expect(new Todo()).toBeTruthy();
    });


it('should accept values in the constructor', () => {
    let todo = new Todo({
        titulo : 'Ola',
        completo : true
    });
    expect(todo.titulo).toEqual('Ola');
    expect(todo.completo).toEqual(true);
    });
});
```

# Criando um service para o nosso Todo

* Vamos criar uma classe **service** que vai conter a nossa lógica de negócio.
* * > ng generate service TodoData
* Verifique que foram criados dois arquivos:
```
 ng generate service TodoData
  create src/app/todo-data.service.spec.ts (387 bytes)
  create src/app/todo-data.service.ts (114 bytes)
```



