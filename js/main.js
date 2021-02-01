console.log('Starting up');

$(document).ready(initPage);

function initPage() {
    console.log('Started...');
    renderProjects();
}


function renderProjects() {
    var projects = getProjects();

    var strHTMLs = projects.map(function (project) {
        return `
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick = "(updateCurrProject(${project.id}))">>
               <div class="portfolio-hover">
                 <div class="portfolio-hover-content">
                   <i class="fa fa-plus fa-3x"></i>
                 </div>
               </div>
              <img class="img-fluid imgs" src="${project.imgUrl}" alt="">
            </a>
           <div class="portfolio-caption">
              <h4>${project.name}</h4>
              <p class="text-muted">${project.title}</p>
           </div>
          </div> 
        `
    })
    var $elRow = $('#portfolio .projects');
    $elRow.html(strHTMLs.join(''));
}

function renderModal() {
    var currProject = getCurrProject();
    var date = new Date(currProject.publishedAt);
    var strHTML = `
      <h2>${currProject.name}</h2>
      <p class="item-intro text-muted">${currProject.title}.</p>
      <img class="img-fluid d-block mx-auto" src="${currProject.imgUrl}">
      <p>${currProject.desc}</p>
      <ul class="list-inline">
        <li>Date: ${date.toString()}</li>
      </ul>
      <a href = "${currProject.url}" target ="_blank" style = "display:block">Link to My project</a>
      <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project
      </button>`;
    var $elModalBody = $('.modal-body');
    $elModalBody.html(strHTML);
}