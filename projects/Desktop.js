'use strict'

const   redirect = () => {
    if (window.innerWidth < 800)
        window.location.href = "Mobile.html"
};
window.onload = redirect;
window.addEventListener('resize', redirect);

const keyframe1El = document.querySelectorAll(`.keyframe-1`);
const keyframe2El = document.querySelectorAll(`.keyframe-2`);
const keyframe3El = document.querySelectorAll(`.keyframe-3`);
const keyframeEl = [...keyframe1El, ...Array.from(keyframe2El).reverse(), ...keyframe3El];

const projectCon = document.querySelector(`.timeline-project-description`);
const projectBtnCon = document.querySelector(`.timeline-button-container`);
const projectDescription = document.querySelector(`.project-description`);
const projectGithubBtn = document.querySelector(`.view-on-github-button`);
const projectDetails = document.querySelector(`.project-details`);
const projectTitle = document.querySelector(`.project-title`);
const projectLanguages = document.querySelector(`.json-lang`);
const projectMoreBtn = document.querySelector(`.more-button`);
const projectHost = document.querySelector(`.project-host`);

let highlightedKeyframeEl = keyframeEl[0];
highlightedKeyframeEl.classList.toggle(`highlighted`);
let keyframeSelector = 0;

let   ProjectData = [];

const   updateBtn = () => {
    if (projectMoreBtn.textContent === `Details`)
        projectMoreBtn.textContent = `Collaps`;
    else
        projectMoreBtn.textContent = `Details`;
    projectDetails.classList.toggle(`hidden`);
};

const   updateProject = () => {
    projectHost.textContent = ProjectData[keyframeSelector].host;
    projectTitle.textContent = ProjectData[keyframeSelector].title;
    projectDescription.textContent = ProjectData[keyframeSelector].description;
    let	language = ``;
	ProjectData[keyframeSelector].lang.forEach(ele => {
		language += `<div class="lang" style="margin-top: 20px;">${ele}</div>`;
	});
    projectLanguages.innerHTML = language;
    console.log(ProjectData[keyframeSelector].md);
    fetch(ProjectData[keyframeSelector].md).then(response => {
        if (!response.ok)
            throw new Error('Markdown file not found.');
        return response.text();
    }).then(markdown => {
        projectDetails.innerHTML = marked.parse(markdown);
    }).catch(error => {
        projectDetails.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });
    if (`link` in ProjectData[keyframeSelector]) {
        projectGithubBtn.setAttribute(`href`, ProjectData[keyframeSelector].link)
        projectBtnCon.appendChild(projectGithubBtn);
    } else {
        projectGithubBtn.remove();
    }
};

fetch('projects.json').then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}).then(data => {
    ProjectData = data;
    keyframeEl.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            keyframeSelector = index;
            highlightedKeyframeEl.classList.toggle('highlighted');
            highlightedKeyframeEl = keyframeEl[keyframeSelector];
            highlightedKeyframeEl.classList.toggle('highlighted');
            updateProject();
        });
    });
    projectMoreBtn.addEventListener('click', updateBtn);
    updateProject();
}).catch(error => {
    console.error('Error loading JSON:', error);
});
