window.onscroll = function() {
    let jumpBtn = document.querySelector('#jump-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      jumpBtn.style.display = "block";
    } else {
      jumpBtn.style.display = "none";
    }
  }

const projects = document.getElementById('projects');
const resume = document.getElementById('resume');
const about = document.getElementById('about');
about.style.display = "grid";
projects.style.display = "none";
resume.style.display = "none";

document.getElementById('projects-link').addEventListener("click", function(){
    projects.style.display = "block";
    document.getElementById('projects-link').className = "active";
    about.style.display = "none";
    document.getElementById('about-link').className = "inactive";
    resume.style.display = "none";
    document.getElementById('resume-link').className = "inactive";
});

document.getElementById('about-link').addEventListener("click", function(){
    projects.style.display = "none";
    document.getElementById('projects-link').className = "inactive";
    about.style.display = "grid";
    document.getElementById('about-link').className = "active";
    resume.style.display = "none";
    document.getElementById('resume-link').className = "inactive";
});

document.getElementById('resume-link').addEventListener("click", function(){
    projects.style.display = "none";
    document.getElementById('projects-link').className = "inactive";
    about.style.display = "none";
    document.getElementById('about-link').className = "inactive";
    resume.style.display = "block";
    document.getElementById('resume-link').className = "active";
});
