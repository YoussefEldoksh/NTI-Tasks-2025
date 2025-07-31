const http = require('http');
const fs = require('fs');



const posts = [
    {
        id: 1,
        title: "First Post",
        content: "This is the content of the first post. It's a simple example to demonstrate the functionality.",
        author: "John Doe",
        date: "2025-07-30"
    },
    {
        id: 2,
        title: "Second Post",
        content: "Another post to show how multiple posts can be displayed dynamically.",
        author: "Jane Smith",
        date: "2025-07-29"
    },
    {
        id: 3,
        title: "Third Post",
        content: "This post includes some more details to make the page look interesting.",
        author: "Alex Johnson",
        date: "2025-07-28"
    }
];

const server = http.createServer((req,res)=>
{
    try {
        
    if(req.url === '/')
    {
        res.write('Hello world from nodejs...');
        res.end();
    }
    else if (req.url === '/home') {

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`
    <div class="root" style="width: 100%; text-align: center;">
        <h2>Home</h2>
    </div>
                    `);
                res.end();

        }
    else if(req.url ==='/about')
    {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`
    <div class="root" style="width: 100%; text-align: center;">
        <h2>About Page</h2>
    </div>
                    `);
                res.end();
    }


    else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(`    <div class="root" style="width: 100%; text-align: center;">
        <h2>404 Not Found</h2>
    </div>
             `);
            res.end();
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Something went wrong: ' + error.message);
        res.end();    
    }

});



server.listen(3000);

console.log('Listening on port 3000...');







function displayPostLists()
{

    let htmlTemplate = '';

    for (let post of posts) {
        htmlTemplate += `
<div class="card" style="width: 18rem; margin:">
  <div class="card-body">
    <h3 class="card-title"> ${post.author}</h3>
    <h6 class="card-subtitle mb-2 text-muted">${post.title} </h6>
    <p class="card-text">${post.content} </p>
    <p href="#" class="card-link" style="text-align: right"> ${post.date} </p>
  </div>
</div>
        `;

    }

    return htmlTemplate;

}


function addToPostList()
{

}


function deleteFromPostList()
{
    
}