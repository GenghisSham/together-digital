const postsSection = document.querySelector('.blog-posts');
const postsContainer = postsSection.querySelector('.posts');
const filterLinks = Array.from(postsSection.querySelectorAll('.category-link'));
const allPosts = Array.from(postsContainer.querySelectorAll('.post'));
filterLinks.forEach( link => link.addEventListener( 'click', filterClick ) );

function filterClick(event) {
    event.preventDefault();
    hideAllLinks();
    event.currentTarget.setAttribute('aria-selected', true);
    hideAllPosts();
    showPost(event.currentTarget);
}

function hideAllLinks() {
    filterLinks.forEach(link => {
        link.setAttribute('aria-selected', false);
    });
}

function hideAllPosts() {
    allPosts.forEach(post => {
        post.classList.remove('show');
    });
}

function showAllPosts() {
    allPosts.forEach(post => {
        post.classList.add('show');
    });
}

function showPost(currentTarget) {
    let currentFilter = currentTarget.getAttribute('aria-label');
    let findPost;
    if(currentFilter === 'all') {
        findPost = currentFilter;
        showAllPosts();
    }
    else {
        findPost = allPosts.find(
            post => post.getAttribute('aria-labelledby')  === currentTarget.getAttribute('aria-label')
        );
        if(!findPost) {
            return;
        }
        findPost.classList.add('show');
    }
}

showAllPosts();