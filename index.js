

// Navigate to my website
function dilipProfile() {
    window.open('https://dilipbackend.xyz/intro', '_blank');
}

let element = document.getElementById("heart");
let cmt_element = document.getElementById("comment");
let l_count = document.getElementById("l_count");
let flag = true;
element.addEventListener("click", (e) => {
    if (flag) {
        e.target.style.color = "orangered"
        flag = false
        let count = Number(l_count.innerHTML);
        l_count.innerHTML = count + 1

    } else {
        e.target.style.color = "black"
        flag = true;
        let count = Number(l_count.innerHTML);
        l_count.innerHTML = count - 1
    }
});

// Comment area animation
comment_area = document.getElementById("comment_area");
cmt_element.addEventListener("click", (() => {
    comment_area.focus()
    comment_area.style.border = "2px solid rgba(255, 68, 0, 0.801)"
    comment_area.style.transform = "translateY(-10px)"
}))


// For handing the comment input  --start

current_input = "";
const inputHandler = function (e) {
    current_input = e.target.value
}

// Create parent/main comments
function createMenuItem(name) {
    return `<div class="parent_comment">
    <div class="parent_profile">
      <div class="profile_child">
        <img
        src="  https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
        alt="" class="profile_img" />
      <h3>Suresh Kapoor</h3>
      </div>
      <i  title="Delete" class="fa fa-trash delete"></i>
    
    </div>
    <p class="comment_text_content"> ${String(name)}</p>
    <div class="reply_edit_wrapper">
    <i class="fa fa-reply reply_icon"></i>
    <i class="fa fa-edit edit_icon"></i>
    </div>
    </div>`;
    
    
}

const comment_wrapper = document.querySelector('#comment_add');
// add the user profile items


comment_area.addEventListener("keyup", function (e) {
    let parent_element = document.getElementById("comment_add")
    let child_element = document.createElement("div")
    if (e.keyCode == 13) {
        if (current_input) {
            comment_wrapper.innerHTML+=createMenuItem(current_input);
            trash()
        }
        comment_area.value = ""
        current_input = ""
    }
})

// for Chrome
comment_area.addEventListener('input', inputHandler);

// for firefox and other stupid browsers
comment_area.addEventListener('propertychange', inputHandler)
// For handing the comment input  --end


// Delete element on click -- Start
let delete_dictionary = {}
function trash(){
let delete_element = document.getElementsByClassName("delete")
for (let i = 0; i < delete_element.length; i++) {
    delete_dictionary[i] = document.getElementsByClassName("parent_comment")[i];
    delete_element[i].addEventListener("click", (() => remove(i)))
}
}
trash()

function remove(current_index) {
    // remove comment with animation
    delete_dictionary[current_index].style.animation = "zoomdown .3s"
    setTimeout(() => {
        delete_dictionary[current_index].remove()
    }, 300);

}

 // Delete element on click -- End

