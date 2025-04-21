function startWatching() {
    alert("Streaming service coming soon! Sign up for updates.");
}

function watchAnime(title) {
    alert(`Now watching ${title}! (Placeholder)`);
}

function watchEpisode(anime, episode) {
    alert(`Now watching ${anime} - ${episode}! (Placeholder)`);
}

function toggleEpisodes(id) {
    const episodes = document.getElementById(`${id}-episodes`);
    if (episodes.style.display === 'none' || episodes.style.display === '') {
        episodes.style.display = 'block';
    } else {
        episodes.style.display = 'none';
    }
}

// Log when the page loads and add wheel scrolling for featured grid
document.addEventListener('DOMContentLoaded', () => {
    console.log('AnimeDash loaded successfully!');
    const grid = document.querySelector('.featured-grid');
    grid.addEventListener('wheel', (e) => {
        e.preventDefault();
        grid.scrollLeft += e.deltaY;
    });
});
