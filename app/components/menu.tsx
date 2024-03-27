import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

function Menu() {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-yellowd rounded-full w-40 h-10 flex items-center justify-center hover:cursor-pointer">
          menu
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-center bg-yellowd/40">
        <div className="grid space-y-4 place-items-center px-6 py-6 text-xl md:text-3xl uppercase tracking-wide text-center">
          <div
            className="hover:bg-yellowd hover:cursor-pointer border-black border-2 w-fit px-6 pt-3 pb-1 rounded-2xl"
            onClick={() => router.push('/')}
          >
            home
          </div>
          <div
            className="hover:bg-yellowd hover:cursor-pointer border-black border-2 w-fit px-6 pt-3 pb-1 rounded-2xl"
            onClick={() => router.push('/feed')}
          >
            feed
          </div>
          <div
            className="hover:bg-yellowd hover:cursor-pointer border-black border-2 w-fit px-6 pt-3 pb-1 rounded-2xl"
            onClick={() => router.push('/products')}
          >
            products
          </div>
          <div
            className="hover:bg-yellowd hover:cursor-pointer border-black border-2 w-fit px-6 pt-3 pb-1 rounded-2xl"
            onClick={() => router.push('/contact')}
          >
            contact
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Menu;
