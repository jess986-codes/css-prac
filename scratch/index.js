const target = {
  clicked: false,
  currentFollowers: 90,
  btn: document.querySelector("a.btn"),
  fw: document.querySelector("span.followers"),
};

const follow = () => {
  target.clicked = !target.clicked;
  target.btn.innerHTML = 'Following <i class="fas fa-user-times"></i>';

  if (target.clicked) {
    target.currentFollowers += 1;
  } else {
    target.currentFollowers -= 1;
    target.btn.innerHTML = 'Follow <i class="fas fa-user-plus"></i>';
  }

  target.fw.textContent = target.currentFollowers;
  target.btn.classList.toggle("following");
};
