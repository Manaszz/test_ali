const example = {username:"Ivan"}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: JSON.stringify(example)
}
)
  .then(response => response.json())
  .then(json => console.log(json))
