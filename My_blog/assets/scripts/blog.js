// // get content for slides
// fetch("http://127.0.0.1:5000/show-images/")
//       .then((res) => res.json())
//       .then((data) => {
//         data.forEach((slide, index) => {
//           createBullet(index);
//           createSlide(slide, index);
//         });        
//       });


function getProducts() {
    fetch("http://127.0.0.1:5000/show-images/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let list = document.getElementById("blogz");
        console.log(list);
        data.forEach((product) => {
          let item = `
            <div id="row2" class= "card" >
              <img class=image src=${image.images} />
              <h4>${subtitle.subt1}</h4>
              <h4>${description.descipt}</h4>
              <h4>${title.t1}</h4>
              <p><button onclick="addTocart()">Add to Cart</button></p>
            </div>
          `;
          list.innerHTML += item;
        });
    });
}