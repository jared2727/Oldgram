const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
// let all DOM elements load before editing
document.addEventListener("DOMContentLoaded", (event) => {
    function renderPage() {
        // grab DOM element to populate html within
        const main = document.querySelector("main");

        // iterate through the posts array
        posts.forEach((post, index) => {

            // initialize current values and string
            let likesVal = +post.likes;
            let likesString = "";
            

            // if likes are equal to one, make it singular, otherwise plural
            if (likesVal === 1) {
                likesString = `${likesVal} like`;
                
            } else {
                likesString = `${likesVal} likes`;
            }
              
            // apply interated values of post and index to the string literals    
            main.innerHTML +=
            `
            <main>
                <section class="acnt-user">
                    <img class="avatar acnt-avatar" src=${post.avatar}>
                    <div class="acnt-info">
                        <h2>${post.name}</h2>
                        <h3>${post.location}</h3>
                    </div>
                </section>
                <section class="post">
                    <img id="post-img-${index}" class="post-img" src=${post.post}>
                    <div class="icon-container">
                        <p id="heart-${index}" class="heart icon-heart-nofill material-symbols-outlined" src="./images/icon-heart.png">favorite</p>
                        <img class="icon-comment" src="./images/icon-comment.png">
                        <img class="icon-dm" src="./images/icon-dm.png">
                    </div>
                    <p id="likes-${index}" class="likes">${likesString}</p>
                    <p class="caption"><span class="user">gus1819</span> ${post.comment}</p>
                </section>
            </main>
            ` 
            })

            // iterate through the posts array after the page is rendered to grab the newly created DOM elements
            posts.forEach((post, index) => {
                let likesVal = +post.likes;
                let likesString = "";
                
                // DOM element selection
                const heartIcon = document.querySelector(`#heart-${index}`);
                const postImgEl = document.querySelector(`#post-img-${index}`);
                const likesEl = document.querySelector(`#likes-${index}`);
                

                // if heart icon is double clicked, call toggleLike function to update like value and apply to DOM element
                heartIcon.addEventListener("click", () => {
                    toggleLike();
                    if (likesVal === 1) {
                        likesString = `${likesVal} like`;
                    } else {
                        likesString = `${likesVal} likes`;
                    }
                likesEl.textContent = likesString
                })
                
                // if post image is clicked, call toggleLike function to update like value and apply to DOM element
                postImgEl.addEventListener("dblclick", () => {
                    toggleLike();
                    if (likesVal === 1) {
                        likesString = `${likesVal} like`;
                    } else {
                        likesString = `${likesVal} likes`;
                    }
                likesEl.textContent = likesString
                })
                
                // function to increase or decrease likes based on click
                // includes code to toggle fill for the heart svg
                function toggleLike() {
                    if (heartIcon.classList.contains("icon-heart-fill")) {
                        likesVal -= 1;
                        heartIcon.classList.remove("icon-heart-fill");
                        heartIcon.classList.add("icon-heart-nofill");
                        return likesVal
                    } else {
                        likesVal += 1;
                        heartIcon.classList.remove("icon-heart-nofill");
                        heartIcon.classList.add("icon-heart-fill");
                        return likesVal
                    }
                }
            }
        )     
}
// call the render function
renderPage()
});