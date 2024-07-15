async function fetchPosts(){
   
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok) throw new Error('Network response was not ok');
        const posts = await  response.json();
        displayPosts(posts);
    }catch(error){
        document.getElementById('posts-error').innerText = `Error: ${error.message}`
    }


}

function displayPosts(posts){
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = posts.map(post => `
        <div class='post'>
            <h3>Title: ${post.title}</h3>
            <p>Body: ${post.body}</p>
        </div>
        `).join('');
}

fetchPosts();




async function fetchTodos(){
   
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if(!response.ok) throw new Error('Network response was not ok');
        const todos = await  response.json();
        displayTodos(todos);
    }catch(error){
        document.getElementById('todos-error').innerText = `Error: ${error.message}`
    }


}

function displayTodos(todos){
    const todosContainer = document.getElementById('todos');
    todosContainer.innerHTML = todos.map(todo => `
        <div class='todo'>
           <input type="checkbox" ${todo.completed ? 'checked': ''}>
           <label>Item: ${todo.title}</label>
        </div>
        `).join('');
}




fetchTodos();
