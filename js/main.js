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
      }

    },
  }).mount('#app')