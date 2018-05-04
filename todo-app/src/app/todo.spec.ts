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