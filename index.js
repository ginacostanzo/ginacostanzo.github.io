const projects = document.getElementById('projects');
const resume = document.getElementById('resume');
const about = document.getElementById('about');
about.hidden = false;
projects.hidden = true;
resume.hidden = true;

document.getElementById('projects-link').addEventListener("click", function(){
    projects.hidden = false;
    about.hidden = true;
    resume.hidden = true;
});

document.getElementById('about-link').addEventListener("click", function(){
    projects.hidden = true;
    about.hidden = false;
    resume.hidden = true;
});

document.getElementById('resume-link').addEventListener("click", function(){
    projects.hidden = true;
    about.hidden = true;
    resume.hidden = false;
});