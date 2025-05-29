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
    function renderPage() {
        const main = document.querySelector("main");
        posts.forEach((post, index) => {
            let likesVal = +post.likes;
            let likesString = "";
            
            if (likesVal === 1) {
                likesString = `${likesVal} like`;
                
            } else {
                likesString = `${likesVal} likes`;
            }
            
        
            
            console.log(likesString)
           
            // const commentIcon = document.querySelector(".icon-comment");
            // const dmIcon = document.querySelector(".icon-dm");
            // const likesEl = document.querySelector(".likes");
            // const postImgEl = document.querySelector(".post-img");
            
            
            posts[index].likes = likesVal;
            
            // if (likesVal === 1) {
            //         likesEl.textContent = `"${likesString}"`;
            //     } else {
            //         likesEl.textContent = `"${likesString}"`;
            //     }
                
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
                        <p id="heart-${index}" class="heart icon-heart-nofill material-symbols-outlined" src="/images/icon-heart.png">favorite</p>
                        <img class="icon-comment" src="/images/icon-comment.png">
                        <img class="icon-dm" src="/images/icon-dm.png">
                    </div>
                    <p id="likes-${index}" class="likes">${likesString}</p>
                    <p class="caption"><span class="user">gus1819</span> ${post.comment}</p>
                </section>
            </main>
            ` 
    }
    )
            posts.forEach((post, index) => {
                let likesVal = +post.likes;
                let likesString = "";
                
                const heartIcon = document.querySelector(`#heart-${index}`);
                const postImgEl = document.querySelector(`#post-img-${index}`);
                const likesEl = document.querySelector(`#likes-${index}`);
                
                heartIcon.addEventListener("click", () => {
                    toggleLike();
                    if (likesVal === 1) {
                        likesString = `${likesVal} like`;
                    } else {
                        likesString = `${likesVal} likes`;
                    }
                likesEl.textContent = likesString
                })
                
                postImgEl.addEventListener("dblclick", () => {
                    toggleLike();
                    if (likesVal === 1) {
                        likesString = `${likesVal} like`;
                    } else {
                        likesString = `${likesVal} likes`;
                    }
                likesEl.textContent = likesString
                })
                
                
                function toggleLike() {
                    if (heartIcon.classList.contains("icon-heart-fill")) {
                        likesVal -= 1;
                        heartIcon.classList.remove("icon-heart-fill");
                        heartIcon.classList.add("icon-heart-nofill");
                        console.log(likesVal)
                        return likesVal
                    } else {
                        likesVal += 1;
                        heartIcon.classList.remove("icon-heart-nofill");
                        heartIcon.classList.add("icon-heart-fill");
                        console.log(likesVal)
                        return likesVal
                    }
                }
            })      

}
renderPage()


});