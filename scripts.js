var apavi = [
  { nosaukums: 'Puma LaMelo Ball MB.01', bilde: 'apavs1.jpg' },
  { nosaukums: 'Nike KD Trey 5', bilde: 'apavs2.jpg' },
  { nosaukums: 'Nike LeBron 17', bilde: 'apavs3.jpg' },
  { nosaukums: 'Nike PG 4', bilde: 'apavs4.jpg' },
  { nosaukums: 'Nike Zoom Freak 4', bilde: 'apavs5.jpg' },
];

var apaviDiv = document.querySelector('.apavi');
var apaviHTML = ''; // Accumulate HTML content

apavi.forEach(function (apavs, index) {
  apaviHTML += `
        <div class="apavs">
            <img src="${apavs.bilde}" alt="${apavs.nosaukums}">
            <h2>${apavs.nosaukums}</h2>
            <p>Komentāri un atsauksmes:</p>
            <textarea class="komentars" placeholder="Atstājiet savu komentāru un atsauksmi"></textarea>
            <div class="zvaigznes" onclick="publicetKomentaru(${index + 1}, event)">
                <input type="radio" name="atsauksme${index + 1}" id="1zvaigzne${index + 1}" value="1">
                <label for="1zvaigzne${index + 1}">&#9733;</label>
                <input type="radio" name="atsauksme${index + 1}" id="2zvaigznes${index + 1}" value="2">
                <label for="2zvaigznes${index + 1}">&#9733;</label>
                <input type="radio" name="atsauksme${index + 1}" id="3zvaigznes${index + 1}" value="3">
                <label for="3zvaigznes${index + 1}">&#9733;</label>
                <input type="radio" name="atsauksme${index + 1}" id="4zvaigznes${index + 1}" value="4">
                <label for="4zvaigznes${index + 1}">&#9733;</label>
                <input type="radio" name="atsauksme${index + 1}" id="5zvaigznes${index + 1}" value="5">
                <label for="5zvaigznes${index + 1}">&#9733;</label>
            </div>
            <button class="publicet" onclick="publicetKomentaru(${index + 1}, event)">Publicēt</button>
        </div>
    `;
});

// Set the innerHTML of apaviDiv after the loop
apaviDiv.innerHTML = apaviHTML;

function publicetKomentaru(apavsNumurs, event) {
  var komentaraLauks = document.querySelector('.apavs:nth-child(' + apavsNumurs + ') .komentars');
  var atsauksmesRadios = document.querySelectorAll('.apavs:nth-child(' + apavsNumurs + ') input[type="radio"]:checked');
  var atsauksme;

  if (atsauksmesRadios.length > 0) {
    atsauksme = atsauksmesRadios[0].value;
  } else {
    console.error('Vērtējums nav izvēlēts!');
    return; // Exit the function if no rating is selected
  }

  var komentars = komentaraLauks.value;

  // Here you can use the saving functionality, such as sending data to a server or saving it locally
  console.log('Apavam ' + apavsNumurs + ' tika publicēts komentārs "' + komentars + '" ar vērtējumu ' + atsauksme);
  alert('Jūsu komentārs un vērtējums ir publicēti!');

  // Prevent radio buttons from being checked again to rate multiple times
  event.stopPropagation();
}
