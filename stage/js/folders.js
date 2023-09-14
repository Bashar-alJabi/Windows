const foldersIcon = document.querySelector('.folders-icon');
const listFolders = document.querySelector('.folders .list-folders');
openItem(foldersIcon, listFolders, 'open', showOnlyFolders);

const programs = document.querySelectorAll('.folders .list-folders .program');
programs.forEach((program) => {
    program.onclick = function () {
        toggleClassEach(programs, 'selected', this)
    }
})