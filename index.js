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




document.addEventListener("DOMContentLoaded", (event) => {
    let clicked = false; 
    renderPage();
    const heartIcon = document.querySelector(`"#heart-${posts.indexOf(post)}"`);
    function renderPage() {
        
        for (let post of posts) {
            console.log(posts.indexOf(post));
            let likesVal = +post.likes;
            // const commentIcon = document.querySelector(".icon-comment");
            // const dmIcon = document.querySelector(".icon-dm");
            // const likesEl = document.querySelector(".likes");
            // const postImgEl = document.querySelector(".post-img");
            const main = document.querySelector("main");
            
            if (post.likes === 1) {
                    likesVal = `${+post.likes} like`;
                } else {
                    likesVal = `${+post.likes} likes`;
                }
            main.innerHTML +=
            `
            <main>
                <section class="acnt-user">
                    <img class="avatar acnt-avatar" src=./${post.avatar}>
                    <div class="acnt-info">
                        <h2>${post.name}</h2>
                        <h3>${post.location}</h3>
                    </div>
                </section>
                <section class="post">
                    <img class="post-img" src=./${post.post}>
                    <div class="icon-container">
                        <p id="heart-${posts.indexOf(post)}" class="icon-heart-nofill material-symbols-outlined" alt="like icon">favorite</p>
                        <img class="icon-comment" src="./images/icon-comment.png" alt="comment icon">
                        <img class="icon-dm" src="./images/icon-dm.png" alt="direct message icon">
                    </div>
                    <p class="likes">${likesVal}</p>
                    <p class="caption"><span class="user">gus1819</span> ${post.comment}</p>
                </section>
            </main>
            `
            
        }
        
        
        // postImgEl.addEventListener("dblclick", () => {
            //     toggleLike();
            //     if (post.likes === 1) {
                //         likesVal = `${post.likes} like`;
                //     } else {
                    //         likesVal = `${post.likes} likes`;
                    //     }  
                    // })
                    function toggleLike() {
                        if (heartIcon.classList.contains("icon-heart-fill")) {
                            post.likes -= 1;
                            heartIcon.classList.toggle("icon-heart-fill");
                        } else {
                            post.likes += 1;
                            heartIcon.classList.toggle("icon-heart-fill");  
                        }
                        
                    }
                    
                }
                heartIcon.addEventListener("click", () => {
                        toggleLike();
                        clicked = true;
                        console.log(clicked)
                    })


});