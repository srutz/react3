import { type ComponentProps, type ReactNode } from "react";
import { Button } from "./components/ui/button";
import { cn } from "cn";
import { MyDialog, useDialog } from "./useDialog";

type BoxPropsType = { 
  children: ReactNode,
  shadow?: boolean,
  className?: string } & ComponentProps<"div">

function Box({ children, shadow, className, ...props }: BoxPropsType) 
{
  return (
    <div className={cn("border rounded-lg border-gray p-3 bg-indigo-100", 
      shadow && "shadow-xl",
      className)} 
        {...props}>
      {children}
    </div>
  )
}



export function App() {
  return (
    <div>
      <AppContent></AppContent>
      <MyDialog/>
    </div>
  )
}

export function AppContent() {
  const showDialog = useDialog();
  return (
    <div className="flex flex-col items-center">
      <Box className="hover:border-blue-300" shadow>
        <Button className="text-red-300 hover:border-red-300" 
            onClick={() => showDialog("Alert", "Good morning")}>
          show it
        </Button>
      </Box>
    </div>
  )
}

