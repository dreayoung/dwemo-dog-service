import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function Menu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-yellowd rounded-full w-40 h-10 flex items-center justify-center hover:cursor-pointer">
          menu
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-center">
        <DialogHeader>
          <DialogTitle className="text-center">menu</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 place-tems-center p-24">
          <div>home</div>
          <div>feed</div>
          <div>products</div>
          <div>contact</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Menu;
