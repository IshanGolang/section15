// http.js
export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/places');
  
    fetch('http://localhost:3000/users-places', {
      method: 'PUT',
      body: JSON.stringify(places),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  
    const resData = await response.json();
    if (!response.ok) {
      throw new Error('Failed to update user data');
    }
  
    return resData.message;
  }
  