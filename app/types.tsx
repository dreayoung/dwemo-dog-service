export interface ShowErrorObject {
  type: string;
  message: string;
}

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
