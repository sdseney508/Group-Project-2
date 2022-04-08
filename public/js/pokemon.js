// const newFavoriteHandler = async (event) => {
//   event.preventDefault();
//   const pokemon_name = document.querySelector('#pokename').innerHTML;
//   console.log(blog_comment);

//   if (pokemon_name) {
//     const response = await fetch(`/api/pokemon/favorite/${pokemon_name}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to create favorite');
//     }
//   }
// };

// const newCapturedHandler = async (event) => {
//   event.preventDefault();
//   const pokemon_name = document.querySelector('#pokename').innerHTML;
//   console.log(blog_comment);

//   if (pokemon_name) {
//     const response = await fetch(`/api/pokemon/captured/${pokemon_name}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to create favorite');
//     }
//   }
// };

// document
//   .querySelector('#favorite')
//   .addEventListener('CheckboxStateChange', newFavoriteHandler);

// document
//   .querySelector('#captured')
//   .addEventListener('CheckboxStateChange', newCapturedHandler);
