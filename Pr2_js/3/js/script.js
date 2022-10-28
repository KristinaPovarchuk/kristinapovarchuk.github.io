let str = prompt("Введіть речення")

function print(str) {
    let ln = str.length,
        i = 0,
        tId = setInterval(function() {
            line.innerHTML += str[i++];
            if (i == ln) clearInterval(tId);
        }, 100);
};

print(str)

