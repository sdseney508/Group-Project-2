const addToCaptured = async (event) => {
  event.preventDefault();

  const poke_id = $(event.target).data('id');
  const name = $(event.target).data('name');

  const response = await fetch('/api/captured/', {
    method: 'POST',
    body: JSON.stringify({ name, poke_id }),
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

$('.add-btn').on('click', addToCaptured);
