import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { create } from "zustand";


type DialogStoreType = {
  open: boolean;
  message: string;
  title: string;
  setTitle: (title: string) => void,
  setMessage: (message: string) => void,
  setOpen: (open: boolean) => void,
}

const useDialogStore = create<DialogStoreType>((set) => {
  return {
    open: false,
    message: "",
    title: "",
    setTitle: (title: string) => {
      set((state) => {
        return {
          ...state,
          title
        }
      })
    },
    setMessage: (message: string) => {
      set((state) => {
        return {
          ...state,
          message: message
        }
      })
    },
    setOpen: (open: boolean) => {
      set((state) => {
        return {
          ...state,
          open: open,
        }
      })
    }
  }
})

export function useDialog() {
  const { setOpen, setMessage, setTitle } = useDialogStore();
  return (title: string, message: string) => {
    setMessage(message);
    setTitle(title);
    setOpen(true);
  }
}

export function MyDialog() {
  const { open, setOpen, message, title } = useDialogStore();
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogContent className="bg-orange-100">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-lg">
            {message}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
