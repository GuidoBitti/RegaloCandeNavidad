// Datos correctos para autenticación
const correctName = "Candela"; // Cambia por su nombre
const correctSurname = "Mattia"; // Cambia por su apellido
const correctBirthday = "2000-04-26"; // Cambia por su fecha de cumpleaños (YYYY-MM-DD)
const correctAnniversary = "2023-10-22"; // Cambia por su aniversario (YYYY-MM-DD)

// Manejo del formulario de autenticación
document.getElementById('authForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const birthday = document.getElementById('birthday').value;
  const anniversary = document.getElementById('anniversary').value;
  console.log(document.getElementById('winner').value)

  if (
    name === correctName &&
    surname === correctSurname &&
    birthday === correctBirthday &&
    anniversary === correctAnniversary
  ) {
    // Si la autenticación es correcta, mostrar el formulario principal
    document.getElementById('auth-section').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
  } else {
    alert('Datos incorrectos. Por favor, inténtalo nuevamente.');
  }
});

// Descripciones de las terapias
const therapyDescriptions = {
    "Crystal massage": "Is your skin feeling dry or dehydrated? This 90-minute, relaxing massage with a custom signature body serum is perfect for any season. Includes a full-body exfoliation, Palo Santo smudging with Chakra balancing, and it finishes with a luxurious full-body massage.(90 min)",
    "Five-Pointed Star": "Be the star of this service using soothing massage and reflexology on five points- head, hands and feet. Reflexology, an ancient technique that focuses on reflex points which correspond to all the organs of the body. The service concludes with an application of a peppermint cream to help stimulate tired legs and feet.(60 min)",
    "Cranial Massage": "Cranial massage is a light-touch therapy that works with the body’s craniosacral system to support and nourish the central nervous system while helping to alleviate the aches, pains, and the stresses of life. This 90-minute treatment combines a Swedish or deep tissue massage with the gentle touch of cranial and sacral holds around the head and lower spine to encourage the body to relax and become more balanced.(90 min)",
    "Laurel Rebalancer": "At the core of Ayurvedic rituals is a luxurious experience inspired by ancient Purva Karma therapies. This treatment includes a botanical body mask, exfoliation, aromatherapy, traditional massage, marma face points, and an Ayurvedic herbal wrap, and the result is deeply cleansed, silky-smooth skin nourished with warm herbal Ayurvedic body oils. The Laurel Rebalancer offers a divine escape that fortifies the immune system and melts away stress for exquisite well-being.(90 min)"
  };
  
// Mostrar descripción según la selección de terapia
document.getElementById('therapy').addEventListener('change', function() {
    const selectedTherapy = this.value;
    const descriptionContainer = document.getElementById('therapy-description');
  
    if (therapyDescriptions[selectedTherapy]) {
      descriptionContainer.innerHTML = `<p><strong>${selectedTherapy}:</strong> ${therapyDescriptions[selectedTherapy]}</p>`;
    } else {
      descriptionContainer.innerHTML = '<p>Selecciona una opción para ver los detalles de cada terapia.</p>';
    }
});
// Manejo del formulario principal
document.getElementById('spaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const day = document.getElementById('day').value;
    const alternateDay1 = document.getElementById('alternateDay1').value;
    const alternateDay2 = document.getElementById('alternateDay2').value;
    const therapy = document.getElementById('therapy').value;
  
    if (!day || !alternateDay1 || !alternateDay2 || !therapy) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }
  
    // Enviar correo (ejemplo con EmailJS)
    emailjs.send("service_bqdrkvm","template_tv6jpcj",{
      from_name: "guido",
      day: day,
      alternate_day1: alternateDay1,
      alternate_day2: alternateDay2,
      therapy: therapy,
    }).then(function(response) {
      alert('¡Formulario enviado con éxito! Gracias ❤️');
    }, function(error) {
      alert('Error al enviar el formulario. Inténtalo nuevamente.');
    });
});
  
