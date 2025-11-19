export default function FeatureCard({ icon, title, description, badge }) {
  return (
    <div className="relative bg-card-base/95 border border-card-divider rounded-2xl p-5 shadow-soft">
      {badge && (
        <span className="absolute -top-2 -right-2 rounded-full bg-accent-yellow text-[0.65rem] font-semibold px-2 py-1 text-text-dark shadow">
          {badge}
        </span>
      )}

      {/* Icon circle */}
      <div className="h-10 w-10 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4">
        <span className="text-accent-blue text-lg">{icon}</span>
      </div>

      <h3 className="text-base md:text-lg font-semibold text-text-dark mb-2">
        {title}
      </h3>

      <p className="text-sm text-text-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
}
