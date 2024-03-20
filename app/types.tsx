export interface UserContextTypes {
  user: User | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  image: string;
}

// USER ^
/////////////////////////////////////////////

export interface ShowErrorObject {
  type: string;
  message: string;
}

// FORM VALIDATIONS ^
/////////////////////////////////////////////

export interface OwnerRegistrationCompTypes {
  name: string;
  email: string;
  password: string;
  setName: (newValue: string) => void;
  setEmail: (newValue: string) => void;
  setPassword: (newValue: string) => void;
  error?: string;
}

export interface PupRegistrationCompTypes {
  petName: string;
  username: string;
  breed: string;
  birthDate: string;
  setPetName: (newValue: string) => void;
  setUserName: (newValue: string) => void;
  setBreed: (newValue: string) => void;
  setBirthDate: (newValue: string) => void;
  error?: string;
}

// REGISTRATION ^
/////////////////////////////////////////////
