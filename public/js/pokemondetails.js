const backBtn = async (event) => {
  console.log('i hate front end shit');
  event.preventDefault();
  // Send a POST request to the API endpoint
  const response = await fetch('/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log(response);
  if (response.ok) {
    // If successful, redirect the browser to the homepage but with a logout button instead of login
    document.location.replace('/');
  }
};

document
  .querySelector('.backBtn')
  .addEventListener('click', backBtn);