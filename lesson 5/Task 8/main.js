

fetchPosts();

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts") 
                if(!response.ok)
                {
                    throw new Error('Could not fetch data...');
                }

                const data = await response.json();
                console.log(data);
                
                let postsList = document.querySelector('#posts-list');

                let htmlContent = '';


                for (let index = 0; index < data.length; index++) {
                    htmlContent += `
                            <a href="#" class="list-group-item list-group-item-action" aria-current="true" >
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">${data[index].title}</h5>
                                <small>3 days ago</small>
                                </div>
                                <p class="mb-1">${data[index].body}</p>
                            </a>
                    `;
                }

                postsList.innerHTML =  `
                    ${htmlContent}
                `;
    } catch (error) {
        console.log(error);
    }
}