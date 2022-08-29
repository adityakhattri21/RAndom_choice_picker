
const tagsEl = document.querySelector(".tags");
const textArea = document.querySelector(".textarea")

textArea.focus(); // this function automatically puts the cursor on the object.

textArea.addEventListener("keyup",function(e){
  createTag(e.target.value)

  if(e.key === 'Enter')
  {
    setTimeout(function(){
        e.target.value=''
    },30)

    randomSelect()

  }

})

function createTag(input){
  const tags = input.split(',');
  const tag = tags.filter(removeSpace)
  const newTags = tag.map(mapping)

  tagsEl.innerHTML='';

  newTags.forEach(function(tags){
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tags;
    tagsEl.appendChild(tagEl)
  })
}

function removeSpace(newTag){
    return newTag !='';
}
function mapping(tag){
  return tag.trim()
}

function randomSelect(){
  const time = 30;

  const interval = setInterval(function(){
    const randomTag = pickRandomTag()

  highlight(randomTag)

  setTimeout(function(){
    unHighlight(randomTag)
  },100)
  },100)

  setTimeout(function(){
    clearInterval(interval)

    setTimeout(function(){
      const tag = pickRandomTag()

      highlight(tag)
    },100)
  },time*100)
}


function pickRandomTag(){
  const tags=document.querySelectorAll(".tag")
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(rtag){
  rtag.classList.add("highlight")
}

function unHighlight(rtag){
  rtag.classList.remove("highlight")
}
