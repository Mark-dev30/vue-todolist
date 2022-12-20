const { createApp } = Vue

  createApp({
    data() {
      return {
        textInput:"",
        todoList: [
            {
                text: "Prepare la colazione",
                done: false

            },
            {
                text: "Partecipare al corso",
                done: true

            },
            {
                text: "Fare la spesa",
                done: false

            },
            {
                text: "Guardare SerieTv",
                done: true

            },
        ],
      }
    },
    methods: {
      
      removeTodo(index){
        this.todoList.splice(index, 1);
      },

      createTodo(){
        let newtodo = {
            text: this.textInput,
            done: Math.random() >= 0.5
        }

        this.todoList.push(newtodo);
      },

      changeDone(index){
        if(this.todoList[index].done){
          this.todoList[index].done = false
        }
        else{
          this.todoList[index].done = true
        }
      }

    },
  }).mount('#app')