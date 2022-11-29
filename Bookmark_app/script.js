const container=document.querySelector(".container");
const add_website=document.querySelector(".add_website");
const add_topic=document.querySelector(".add_topic");
const add_button=document.querySelector(".add_button");
const show_saved=document.querySelector(".show_saved");
let url_link;
let saved_list=[];
let save_obj;
const collectasks=()=>{
const topic=add_topic.value;
const website_link=add_website.value;
save_obj={
    subject:topic,
    website:website_link
};
saved_list.push(save_obj);
}
const show_saved_update=()=>{
    const item=saved_list[saved_list.length-1];
        console.log(item);
        const topic_container=document.createElement("div");
        const heading=document.createElement("p");
        heading.innerText=item.subject;
        const links=document.createElement("links");
        links.innerText=item.website;
        topic_container.appendChild(heading);
        topic_container.appendChild(links);
        show_saved.appendChild(topic_container);
    

}
add_button.addEventListener('click',()=>{
collectasks();
console.log(saved_list);
show_saved_update();
});
