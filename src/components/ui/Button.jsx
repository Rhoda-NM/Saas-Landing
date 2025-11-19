export default function Button({
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...props
}) {
    const base = 
    "inline-flex items-center justify-center font-medium rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-transparent";

    const variants = {
        primary: "bg-brand text-text-headline hover:brightness-110 shadow-soft",
        outline:
        "border border-text-sub text-text-headline/90 hover:bg-text-sub/10",
        ghost: "text-text-headline/80 hover:bg-white/5",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const  classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}