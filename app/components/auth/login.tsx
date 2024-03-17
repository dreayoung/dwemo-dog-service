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
import bowl from '../../../public/jumpy-unscreen.gif';

function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer">Log in</div>
      </DialogTrigger>
      <DialogContent className="text-center px-8 py-16 md:px-20 md:py-24">
        <Image src={bowl} className="w-24 mx-auto" alt="dog bowl" />
        <span className="text-sm md:text-[1rem]">
          Bark, bark! Your friends miss you. Log in and catch up with the pack.
        </span>
        <div className="grid gap-4 mt-8">
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
            "
              value=""
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
            "
              value=""
              type="password"
              autoComplete="off"
            />
          </div>
          <div className="bg-yellowd rounded-[750px] w-full p-2 text-black mt-4 shadow-sm">
            log in
          </div>
          <div className="text-xs">
            don&apos;t have an account?{' '}
            <span className="text-gray-600 hover:underline hover:cursor-pointer">
              register here
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
