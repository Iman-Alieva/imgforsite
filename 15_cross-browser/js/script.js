const swiper=new Swiper('.swiper',{loop:!0,autoplay:{delay:3000,disableOnInteraction:!1,},pagination:{el:'.swiper-pagination',clickable:!0},})
document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.how-tab__btn').forEach(function(howTabBtn){howTabBtn.addEventListener('click',function(event){const path=event.currentTarget.dataset.path
console.log(path)
document.querySelectorAll('.how-tab__btn').forEach(function(tabBtnActive){tabBtnActive.classList.remove('how-tab__btn--active')})
event.currentTarget.classList.add('how-tab__btn--active');document.querySelectorAll('.how-content').forEach(function(howContent){howContent.classList.remove('how-content-active')})
document.querySelector(`[data-target="${path}"]`).classList.add('how-content-active')})})})
$(".accordion").accordion({active:!1,collapsible:!0,icons:!1,heightStyle:"content"});window.addEventListener('DOMContentLoaded',function(){document.querySelector('.burger').addEventListener('click',function(){document.querySelector('.nav').classList.add('burger-active')});document.querySelector('.menu-close').addEventListener('click',function(){document.querySelector('.nav').classList.remove('burger-active')})})
