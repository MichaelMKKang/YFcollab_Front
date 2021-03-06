async function getUsers() {
    let url = 'http://yfcollab-dev.us-east-1.elasticbeanstalk.com/songs/';
    try {
        let res = await fetch(url, {
            method: "GET", 
        //body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json());
        console.log(res)
        return await res;
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    for (const [key,user] of Object.entries(users)){
        let htmlSegment = `<div class="user">
                            <h2>${user.id}</h2>
                            <h2>${user.title} ${user.artist}</h2>
                            <h2>${user.release_date}</h2>
                        </div>`;

        html += htmlSegment;
    };

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();