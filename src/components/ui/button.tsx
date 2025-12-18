import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium Nakshatra Variants
        sacred: [
          "relative overflow-hidden",
          "bg-gradient-to-r from-primary via-accent to-copper",
          "text-primary-foreground font-heading font-semibold tracking-wide",
          "shadow-lg hover:shadow-[0_0_30px_hsl(40,75%,50%,0.4)]",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
          "border border-primary/30",
        ].join(" "),
        cosmic: [
          "relative overflow-hidden",
          "bg-secondary/80 backdrop-blur-sm",
          "text-foreground font-heading tracking-wide",
          "border border-primary/40 hover:border-primary/70",
          "hover:bg-secondary hover:shadow-[0_0_20px_hsl(40,75%,50%,0.2)]",
          "transition-all duration-500",
        ].join(" "),
        golden: [
          "bg-transparent",
          "text-primary font-heading tracking-wider",
          "border-2 border-primary hover:bg-primary/10",
          "hover:shadow-[0_0_25px_hsl(40,75%,50%,0.3)]",
          "transition-all duration-400",
        ].join(" "),
        ethereal: [
          "bg-card/60 backdrop-blur-md",
          "text-foreground/90 hover:text-foreground",
          "border border-border/50 hover:border-primary/50",
          "hover:bg-card/80",
          "transition-all duration-300",
        ].join(" "),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
