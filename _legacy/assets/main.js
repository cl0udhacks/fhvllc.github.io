const menu = document.getElementById("menu");
    const bar = document.getElementById("bar");
    const overLay = document.getElementById("over-lay");
    const span_1 = document.getElementById("span_1")
    const span_2 = document.getElementById("span_2")
    const span_3 = document.getElementById("span_3")
    const getYear = document.getElementById("getYear");
    const activeLinks = document.querySelectorAll(".active-link");
    console.log(activeLinks);
    activeLinks.forEach(function (link) {

      link.addEventListener("click", function () {
    menu.classList.toggle("menu-hide");
    menu.classList.remove("menu-show");
    //overLay.classList.toggle('over');

      });
    });


   
    const d = new Date();
    let year = d.getFullYear();
    const gh = getYear.innerHTML = year;
    console.log(gh);

    bar.addEventListener("click", function () {
      const html = document.getElementById("html");
      console.log(html);
      menu.classList.toggle('menu-show');
      over.classList.toggle('over');
      span_2.classList.toggle('active');
      span_1.classList.toggle('span_1');
      span_3.classList.toggle('span_3');
      html.classList.toggle("overflow");
     
    });
