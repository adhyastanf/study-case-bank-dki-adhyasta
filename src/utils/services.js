import axios from 'axios';

async function fetchRegistration(data) {
  const { name, email, phone, birthDate, birthPlace } = data;

  return await axios.post('/api/register', { name, email, phone, birthDate, birthPlace });
}

async function fetchRegistrationPin(data) {
  const { pin, userId } = data;

  return await axios.put('/api/register/pin', { pin, userId });
}

async function fetchLogin(data) {
  const { email, pin } = data;

  return await axios.put('/api/login', { email, pin });
}

export { fetchRegistration, fetchRegistrationPin };
