class ReposView {

    static template(repos) {
        return `<div id="respositories">
                    <a href="${repos.url}">
                    <img src= "gitok.png" id="okimg">
                    </a>
                    <p id="reposName">Repository:<br> ${repos.name}</p>      
                </div>`;
    }

}
