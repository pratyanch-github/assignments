/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor()
    {
      this.TodoList=[];
    }

    add(todo)
    {
        this.TodoList.push(todo);
    }

    getAll()
    {
       return this.TodoList;
    }

    get(indexOfTodo)
    {
       if(indexOfTodo<this.TodoList.length)
       return this.TodoList[indexOfTodo];
       else return null;
    }

    remove(indexOfTodo)
    { 
      if(indexOfTodo<=this.TodoList.length)
        this.TodoList.splice(indexOfTodo, 1);
    }

    update(currIndex, updatedTask)
    {   
        // let temp=this.TodoList[currIndex];
        // this.TodoList.splice(currIndex,1);
        // this.TodoList.splice(updatedIndex,0,temp);
        if(currIndex<this.TodoList.length)
           this.TodoList[currIndex]=updatedTask;
    }

    clear()
    {
       this.TodoList=[];
    }
  }

module.exports = Todo;
