function menuFixed (id) {
  var obj = document.getElementById(id);
  var _getHeight = obj.offsetTop;

  window.onscroll = function () {
    changePos(id, _getHeight);
  }
}

function changePos (id, height) {
  var obj = document.getElementById(id);
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop < height) {
    obj.style.position = 'relative';
    obj.style.top = '0px';
  } else {
    obj.style.position = 'fixed';
    obj.style.top = '50px';
    obj.style.width = '20vw';
  }
}
// var offsetStep = 2;
// var currentOffset = 0;
// function elementOffset (obj) {
//   // if (obj.tagName === "LI" && obj.children.length > 0 && obj.children[0].tagName === "A") {
//   //   currentOffset += offsetStep;
//   // }
//   // if (obj.tagName === "LI" && obj.children.length === 1 && obj.children[0].tagName === "A") {
//   //   console.log("最内层的li")
//   //   currentOffset = 0;
//   // }
//   // if (obj.tagName === "UL") {
//   //   if (obj.children[0] && obj.children[0].children[0] && obj.children[0].children[0].tagName === "A")
//   //     currentOffset += offsetStep;
//   //   obj.style.marginLeft = currentOffset + "rem";
//   // }

//   // if (obj.tagName === "A") {
//   //   currentOffset = 0;
//   // }
//   // console.log(obj.children);
//   let objChild = [...obj.children]
//   objChild.forEach((ele) => {
//     if (ele.tagName === 'UL') {
//       ele.style.marginLeft = currentOffset + "rem";
//     }
//     elementOffset(ele)


//   })

// }

// function tocFormat (id) {
//   obj = document.getElementById(id)
//   elementOffset(obj)
// }

window.onload = function () {
  menuFixed('top-fixed');
  // tocFormat('toc');
}