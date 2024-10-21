let currentPage = 'main';

const main = document.getElementById('main');
const links = document.getElementById('links');
const projects = document.getElementById('projects');
const mainButton = document.getElementById('');
const linksButton = document.getElementById('');
const projectsButton = document.getElementById('');

document.addEventListener('DOMContentLoaded', function() {
    if (currentPage === 'main') {
        main.style.display = 'block';
        links.style.display = 'none';
        projects.style.display = 'none';
    } else if (currentPage === 'links') {
        links.style.display = 'block';
        main.style.display = 'none';
        projects.style.display = 'none';
    } else if (currentPage === 'projects') {
        projects.style.display = 'block';
        main.style.display = 'none';
        links.style.display = 'none';
    }
});

function changePage(page) {
    if (page === 'main') {
        main.style.display = 'block';
        links.style.display = 'none';
        projects.style.display = 'none';
    } else if (page === 'links') {
        links.style.display = 'block';
        main.style.display = 'none';
        projects.style.display = 'none';
    } else if (page === 'projects') {
        projects.style.display = 'block';
        links.style.display = 'none';
        main.style.display = 'none';
    }
}
