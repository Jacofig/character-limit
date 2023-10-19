var x, y, z, a, b, c;
a=document.getElementById("imie");
b=document.getElementById("nazwisko");
c=document.getElementById("opis");
x = a.maxLength;
y = b.maxLength;
z = c.maxLength;

//funkcja wykonywana na wczytaniu strony, wpisuje domyślne maksymalne długości pól wprowadzania
function onload(){
    document.getElementById('im').textContent = x;
    document.getElementById('na').textContent = y;
    document.getElementById('op').textContent = z;
}

//Funkcja zawierająca EventListener dla każdego z 3 pól wprowadzania. Oczekuje on na wprowadzanie z klawiatury, i oblicza pozostałą liczbę
//znaków odejmując od maksymalnej liczby znaków długość wpisanego ciągu. Następnie do przygotowanych wcześniej divów zapisuje wynik.
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