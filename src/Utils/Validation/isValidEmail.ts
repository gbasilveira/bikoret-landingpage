

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default (email: string): boolean => emailRegex.test(email);