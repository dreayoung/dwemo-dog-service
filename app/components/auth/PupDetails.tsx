import { PupRegistrationCompTypes } from '@/app/types';

export default function PupDetails({
  petName,
  username,
  breed,
  birthDate,
  setPetName,
  setUserName,
  setBreed,
  setBirthDate,
  error,
}: PupRegistrationCompTypes) {
  return (
    <div className="grid gap-4 mt-8">
      <div className="flex flex-col space-y-2 items-start">
        <label className="text-xs">Pet Name</label>
        <input
          placeholder="your name"
          className="
        block
        w-full
        bg-transparent
        text-black
        placeholder:text-black
        border
        border-[#e3e8f7]
        rounded-[750px]
        py-2.5
        px-4
        focus:outline-[#e3e8f7]
        text-sm
        shadow-sm
        placeholder:text-gray-400
    "
          value={petName || ''}
          onChange={(e) => setPetName(e.target.value)}
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col space-y-2 items-start">
        <label className="text-xs">Username</label>
        <input
          placeholder="@"
          className="
        block
        w-full
        bg-transparent
        text-black
        placeholder:text-black
        border
        border-[#e3e8f7]
        rounded-[750px]
        py-2.5
        px-4
        focus:outline-[#e3e8f7]
        text-sm
        shadow-sm
        placeholder:text-gray-400
    "
          value={username || ''}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex space-x-2 items-center">
        <div className="flex flex-col space-y-2 items-start">
          <label className="text-xs">Breed</label>
          <input
            placeholder="Maltese"
            className="
        block
        w-full
        bg-transparent
        text-black
        placeholder:text-black
        border
        border-[#e3e8f7]
        rounded-[750px]
        py-2.5
        px-4
        focus:outline-[#e3e8f7]
        text-sm
        shadow-sm
        placeholder:text-gray-400
    "
            value={breed || ''}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
            autoComplete="off"
          />
          {/* <span className="text-xs">Must be at least 8 characters</span> */}
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <label className="text-xs">Birth Date</label>
          <input
            placeholder="06/24/2012"
            className="
        block
        w-full
        bg-transparent
        text-black
        placeholder:text-black
        border
        border-[#e3e8f7]
        rounded-[750px]
        py-2.5
        px-4
        focus:outline-[#e3e8f7]
        text-sm
        shadow-sm
        placeholder:text-gray-400
    "
            value={birthDate || ''}
            onChange={(e) => setBirthDate(e.target.value)}
            type="text"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
