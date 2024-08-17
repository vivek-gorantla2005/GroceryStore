import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type = "text", placeholder, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "flex h-12 w-96 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
