

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string): boolean => emailRegex.test(email);
export default isValidEmail;