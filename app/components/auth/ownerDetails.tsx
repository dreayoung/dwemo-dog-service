import { OwnerRegistrationCompTypes } from '@/app/types';

export default function OwnerDetails({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  error,
}: OwnerRegistrationCompTypes) {
  return (
    <div className="grid gap-4 mt-8">
      <div className="flex flex-col space-y-2 items-start">
        <label className="text-xs">Name</label>
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
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col space-y-2 items-start">
        <label className="text-xs">Email address</label>
        <input
          placeholder="paws@gmail.com"
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
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col space-y-2 items-start">
        <label className="text-xs">Password</label>
        <input
          placeholder="password"
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
          value={password || ''}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="off"
        />
        {/* <span className="text-xs">Must be at least 8 characters</span> */}
      </div>
    </div>
  );
}
