export default function PageSection({ id, className = "", children}) {
   return (
    <section
        id={id}
        className={`py-16 md:py-24 ${className}`}
    >
        <div className="max-w-6xl mx-auto px-4">
            {children}
        </div>
    </section>
   )
} 