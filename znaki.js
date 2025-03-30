var x, y, z, a, b, c;
a=document.getElementById("imie");
b=document.getElementById("nazwisko");
c=document.getElementById("opis");
x = a.maxLength;
y = b.maxLength;
z = c.maxLength;

function onload(){
    document.getElementById('im').textContent = x;
    document.getElementById('na').textContent = y;
    document.getElementById('op').textContent = z;
}
 
function znaki(){
    a.addEventListener('input', () => {
        var rm = x - a.value.length;
        document.getElementById('im').textContent = rm;
    });
    b.addEventListener('input', () => {
        var rm = y - b.value.length;
        document.getElementById('na').textContent = rm;
    });
    c.addEventListener('input', () => {
        var rm = z - c.value.length;
        document.getElementById('op').textContent = rm;
    });
}
