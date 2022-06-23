// Your JS goes here

// Normal board
// const container = document.createElement('div');
// document.body.append(container)
// for (var i = 1; i <= 8; i++) {
//     for (var j = 1; j <= 8; j++) {
//         var div = document.createElement('div')
//         div.style.float = 'left'; // also possible with flexbox works (extra later)
//         div.style.width = '11.1%';
//         div.style.paddingBottom = '11.1%'
//         div.style.border = '1px solid black'
//         if (i % 2 === 1) {
//             if (j % 2 === 1) {
//                 div.style.background = 'black';
//             } else {
//                 div.style.background = 'red';
//             }            
//         } else {
//             if (j % 2 === 1) {
//                 div.style.background = 'red';
//             } else {
//                 div.style.background = 'black';
//             }
//         } 
//         container.append(div);
//     }
// }


// Random color board

// function getRandomRgb() {                                //Got the function from stackoverflow
//     var num = Math.round(Math.random() * 0xffffff);
//     var r = num >> 16;
//     var g = num >> 8 & 255;
//     var b = num & 255;
//     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
//   }
  function randomRgb() {                                 //(Revised idea) my function.
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

const container = document.createElement('div');
document.body.append(container)
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        var div = document.createElement('div')
        div.style.float = 'left'; // also possible with flexbox works (extra later)
        div.style.width = '11.1%';
        div.style.paddingBottom = '11.1%'
        div.style.border = '1px solid black'
        div.style.background = randomRgb(); //simpe way...better way
        // if (i % 2 === 1) {
        //     if (j % 2 === 1) {
        //         div.style.background = getRandomRgb();
        //     } else {
        //         div.style.background = getRandomRgb();
        //     }            
        // } else {
        //     if (j % 2 === 1) {
        //         div.style.background = getRandomRgb();
        //     } else {
        //         div.style.background = getRandomRgb();
        //     }
        // } 
        container.append(div);
    }
}