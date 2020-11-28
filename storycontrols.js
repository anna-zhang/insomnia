// story sections
var storyPart1 = document.getElementById('part-1')
var storyPart2 = document.getElementById('part-2')
var storyPart3 = document.getElementById('part-3')
var storyPart4 = document.getElementById('part-4')
var i = 0;

var storyParts = [storyPart1, storyPart2, storyPart3, storyPart4];

// change part in story based on keyboard controls
function changePages(event)
{
    if (i + 1 < storyParts.length && event.key == "ArrowRight"){
        storyParts[i].style.display = "none";
        i++;
        storyParts[i].style.display = "block";
      }
      if (i >= 1 && event.key == "ArrowLeft"){
        storyParts[i].style.display = "none";
        i--;
        storyParts[i].style.display = "block";
      }
}

function nextPage()
{
    if (i + 1 < storyParts.length)
    {
        storyParts[i].style.display = "none";
        i++;
        storyParts[i].style.display = "block";
    
    }
}

function prevPage()
{
    if (i >= 1)
    {
        storyParts[i].style.display = "none";
        i--;
        storyParts[i].style.display = "block";
    }
}