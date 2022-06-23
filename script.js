// Your JS goes here

const container = document.createElement('div');
document.body.append(container)
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        var div = document.createElement('div')
        div.style.float = 'left'; // also possible with flexbox works (extra later)
        div.style.width = '11.1%';
        div.style.paddingBottom = '11.1%'
        div.style.border = '1px solid black'
        if (i % 2 === 1) {
            if (j % 2 === 1) {
                div.style.background = 'black';
            } else {
                div.style.background = 'red';
            }            
        } else {
            if (j % 2 === 1) {
                div.style.background = 'red';
            } else {
                div.style.background = 'black';
            }
        } 
        container.append(div);
    }
}