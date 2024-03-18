import { ShowErrorObject } from '@/app/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { useState } from 'react';

import bowl from '@/public/bowl.png';
import { Loader } from 'lucide-react';
import OwnerDetails from './ownerDetails';
import PupDetails from './PupDetails';

function RegisterModal() {
  const [loading, setLoading] = useState<boolean>(false);
  const [nextStep, setNextStep] = useState<boolean>(false);

  // OWNER DETAILS
  const [name, setName] = useState<string | ''>('');
  const [email, setEmail] = useState<string | ''>('');
  const [password, setPassword] = useState<string | ''>('');
  const [confirmPassword, setConfirmPassword] = useState<string | ''>('');
  const [error, setError] = useState<ShowErrorObject | null>(null);

  // PUP DETAILS
  const [petName, setPetName] = useState<string | ''>('');
  const [username, setUserName] = useState<string | ''>('');
  const [breed, setBreed] = useState<string | ''>('');
  const [birthDate, setBirthDate] = useState<string | ''>('');

  const showError = (type: string) => {
    if (error && Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return '';
  };

  const validate = () => {
    setError(null);
    let isError = false;

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
      setError({ type: 'name', message: 'A Name is required' });
      isError = true;
    } else if (!email) {
      setError({ type: 'email', message: 'An Email is required' });
      isError = true;
    } else if (!reg.test(email)) {
      setError({ type: 'email', message: 'The Email is not valid' });
      isError = true;
    } else if (!password) {
      setError({ type: 'password', message: 'A Password is required' });
      isError = true;
    } else if (password.length < 8) {
      setError({
        type: 'password',
        message: 'The Password needs to be longer',
      });
      isError = true;
    } else if (password != confirmPassword) {
      setError({ type: 'password', message: 'The Passwords do not match' });
      isError = true;
    }
    return isError;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer">Register</div>
      </DialogTrigger>
      <DialogContent className="text-center p-8 md:p-16">
        <Image src={bowl} className="w-24 mx-auto" alt="dog bowl" />
        <span className="text-sm md:text-[1rem]">
          Pawsitively excited to have you join us! Register your pooch and let
          the adventures begin!
        </span>
        {!nextStep ? (
          <OwnerDetails
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <PupDetails
            petName={petName}
            username={username}
            breed={breed}
            birthDate={birthDate}
            setPetName={setPetName}
            setUserName={setUserName}
            setBreed={setBreed}
            setBirthDate={setBirthDate}
          />
        )}
        <DialogFooter>
          <div className="flex flex-col space-y-2">
            {!nextStep ? (
              <div className="flex flex-col space-y-2">
                <button
                  disabled={!name || !email || !password}
                  onClick={() => setNextStep(true)}
                  className={`w-full text-[17px] rounded-[750px] p-2 text-black mt-4 shadow-sm
                  ${
                    !name || !email || !password ? 'bg-gray-200' : 'bg-yellowd'
                  }`}
                >
                  Next step: Add your pet
                </button>
                <div className="text-xs">
                  already have an account?{' '}
                  <span className="text-gray-600 hover:underline hover:cursor-pointer">
                    Log in
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between space-x-2">
                <button
                  disabled={loading}
                  onClick={() => setNextStep(false)}
                  className="flex items-center justify-center w-32 text-[17px] rounded-[750px] p-2 text-black mt-4 shadow-sm bg-yellowd/60 transition-colors duration-300 hover:bg-yellowd ease-in-out"
                >
                  Back
                </button>
                <button
                  disabled={loading}
                  onClick={() => setLoading(true)}
                  className={`
                  flex items-center justify-center w-32 text-[17px] rounded-[750px] p-2 text-black mt-4 shadow-sm
                  ${
                    !petName || !username || !breed || !birthDate
                      ? 'bg-gray-200'
                      : 'bg-[#60a5fa]'
                  }
              `}
                >
                  {loading ? (
                    <Loader
                      className="animate-spin"
                      color="#000000"
                      size={25}
                    />
                  ) : (
                    'Done'
                  )}
                </button>
              </div>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default RegisterModal;
