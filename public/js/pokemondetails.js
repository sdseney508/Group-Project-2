const backBtn = async (event) => {
  event.preventDefault();
  // Send a POST request to the API endpoint
  const response = await fetch('/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.ok) {
    // If successful, redirect the browser to the homepage but with a logout button instead of login
    document.location.replace('/');
  }
};

const addToCaptured = async (event) => {
  event.preventDefault();
  console.log(event);
  const p_id = $(event.target).data('id');
  const name = $(event.target).data('name');

  console.log(p_id);
  console.log(name);

  const response = await fetch('/api/captured', {
    method: 'POST',
    body: JSON.stringify({ name, p_id }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    alert(`${name} Captured!`);
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add Pokémon to collection');
  }
};

document
  .querySelector('.backBtn')
  .addEventListener('click', backBtn);

document
  .querySelector('.add-btn')
  .addEventListener('click', addToCaptured);
