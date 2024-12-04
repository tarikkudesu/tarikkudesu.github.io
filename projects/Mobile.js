'use strict'

const   redirect = () => {
    if (window.innerWidth >= 800)
        window.location.href = "Desktop.html"
};
window.onload = redirect;
window.addEventListener('resize', redirect);

const   Projects = document.querySelectorAll(`.timeline-project-description`);
let     ProjectData = [];

const   setProjects = () => {
    Projects.forEach((elem, index) => {
        if (index >= ProjectData.length)
            return ;
        elem.querySelector(`.project-host`).textContent = ProjectData[index].host;
        elem.querySelector(`.project-title`).textContent = ProjectData[index].title;
        elem.querySelector(`.project-description`).textContent = ProjectData[index].description;
        let languages = ``;
        ProjectData[index].lang.forEach(ele => {
            languages += `<div class="lang" style="margin-top: 20px;">${ele}</div>`;
        });
        elem.querySelector(`.json-lang`).innerHTML = languages;
        const   moreBtn = elem.querySelector(`.more-button`);
        const   projectDetails = elem.querySelector(`.project-details`);
        const   projectBtnCon = elem.querySelector(`.timeline-button-container`);
        const   projectGithubBtn = elem.querySelector(`.view-on-github-button`);
        fetch(ProjectData[index].md).then(response => {
            if (!response.ok)
                throw new Error('Markdown file not found.');
            return response.text();
        }).then(markdown => {
            projectDetails.innerHTML = marked.parse(markdown);
        }).catch(error => {
            projectDetails.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
        moreBtn.addEventListener('click', () => {
            if (moreBtn.textContent === `Details`)
                moreBtn.textContent = `Collaps`;
            else
                moreBtn.textContent = `Details`;
            projectDetails.classList.toggle(`hidden`);
        });
        if ('link' in ProjectData[index]) {
            projectGithubBtn.setAttribute(`href`, ProjectData[index].link)
            projectBtnCon.appendChild(projectGithubBtn);
        } else {
            projectGithubBtn.remove();
        }

    });
};

fetch('projects.json').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}).then(data => {
    ProjectData = data;
    setProjects();
}).catch(error => {
    console.error('Error loading JSON:', error);
});
