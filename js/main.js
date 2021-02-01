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
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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
    console.log('$elRow', $elRow);
    $elRow.html(strHTMLs.join(''));
}


