const classActive = "active";
const allItems = document.querySelectorAll(".certificate-row>div.university");

allItems.forEach(certeficate => {
    const itemToShow = certeficate.querySelector(".certificate")
    certeficate.addEventListener("mouseenter", ()=>{
        if(!certeficate.classList.contains(classActive)){
            itemToShow.classList.add(classActive);
        }
    })        
    certeficate.addEventListener("mouseleave", ()=>{
            itemToShow.classList.remove(classActive)
        }
    )
})

 const hiddenInfoContainers = document.querySelectorAll(".projects>ul>li>a");
 const projBackGroundClass = "proj-background";
 const projShowerClass = "show-proj";
 const projNameShowerClass = "project-name-changer";

 hiddenInfoContainers.forEach(proj => {
    const hiddenInfoItem = proj.querySelector(".hidden-info");
    const projectName = proj.querySelector(".project-name");
    proj.addEventListener("mouseenter", ()=>{
        if(!proj.classList.contains(projShowerClass)){
            proj.classList.add(projBackGroundClass);
            hiddenInfoItem.classList.add(projShowerClass);
            projectName.classList.add(projNameShowerClass);
        }})        
    proj.addEventListener("mouseleave", ()=>{
        proj.classList.remove(projBackGroundClass);
        hiddenInfoItem.classList.remove(projShowerClass);
        projectName.classList.remove (projNameShowerClass);
        })
    })
