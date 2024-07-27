const form = document.getElementById("form");
const input = document.getElementById("input");
const todosList = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

const updateLocalStorage = () => {
  const todosElements = document.querySelectorAll("li");
  const todos = [];
  todosElements.forEach((todoElement) => {
    todos.push({
      text: todoElement.innerText,
      completed: todoElement.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  let todoText = input.value;
  if (todo) todoText = todo.text;
  if (todoText) {
    const todoElement = document.createElement("li");
    if (todo && todo.completed) {
      todoElement.classList.add("completed");
    }
    todoElement.innerText = todoText;
    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLocalStorage();
    });
    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
      updateLocalStorage();
    });
    todosList.appendChild(todoElement);
    input.value = "";
    updateLocalStorage();
  }
};

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}   if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
