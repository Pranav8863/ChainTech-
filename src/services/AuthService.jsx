export const AuthService = {
  login: (email, password) => {
    // Normally you'd use an API request here
    if (email === 'test@test.com' && password === 'password') {
      return { email };
    }
    throw new Error('Invalid credentials');
  },
  register: (email, password) => {
    // Normally you'd post to an API
    return { email, password };
  }
};
