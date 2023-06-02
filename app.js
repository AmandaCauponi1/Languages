const container = document.querySelector('.main')

window.addEventListener('DOMContentLoaded', () => {
    showBoxes()
});

function showBoxes() {
    fetch("data.json")
    .then((data) => {
        return data.json()
    })
    .then((item) => {
        let displaySummary = item.map((info)=>{
            let Languages = info.languages.map((language) => {
                return `<button class="btn">${language}</button>`
            }).join("") 
            let tools = info.tools.map((tool) => {
                return `<button class="btn">${tool}</button>`
            }).join('')
            
            return ` <section class="container">
            <article class="box1">
              <img src=${info.logo} alt="">
                <article class="box2">
                  <article class="box3">
                    <p>${info.company}</p>
                    ${info.new ? '<div class="new">New!</div>': ''}
                    ${info.featured ? ' <div class="featured">Featured</div>': ''}
                    
                   
                            </article>
                            <p class="senior">${info.position}</p>
                            <aside>${info.postedAt}  -  ${info.contract}  - ${info.location} </aside>
                          
                  </article>
            </article>
            
              <article class="btns">
                <button class="btn">${info.role}</button>
                <!-- Level -->
                <button class="btn">${info.level}</button>
                <!-- Languages -->
                ${Languages}
                ${tools}
              </article>
          </section>`
        });
        displaySummary = displaySummary.join("")
        container.innerHTML = displaySummary
        console.log(displaySummary);
        console.log()
    })
    .catch((error) => console.log('Error: ' +error))
}


