import PageSection from "../layout/PageSection";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🗺️",
      title: "Plan your year visually",
      description:
        "Turn big annual goals into clear roadmaps with timelines, milestones, and owners that everyone can see.",
    },
    {
      icon: "📊",
      title: "See progress at a glance",
      description:
        "Use simple boards and summaries to track what’s on track, at risk, or blocked before it’s too late.",
    },
    {
      icon: "🤝",
      title: "Align product and engineering",
      description:
        "Keep priorities, specs, and delivery dates in one place so PMs and engineers stay in sync.",
    },
    {
      icon: "⚡",
      title: "Ship faster without chaos",
      description:
        "Reduce context switching by keeping planning, tasks, and status updates in a single workspace.",
      badge: "Popular",
    },
    {
      icon: "📅",
      title: "From yearly goals to weekly focus",
      description:
        "Break down annual objectives into quarterly themes, then into weekly focus items your team can actually execute.",
    },
    {
      icon: "🔔",
      title: "Stay ahead with smart nudges",
      description:
        "Get gentle reminders when initiatives slip, dependencies are blocked, or milestones are coming up.",
      badge: "New",
    },
  ];

  return (
    <PageSection id="product" className="bg-slate-950 text-text-headline">
      {/* Heading */}
      <div className="max-w-3xl mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Everything your team needs, in one view.
        </h2>
        <p className="text-sm md:text-base text-text-sub">
          DevFlow connects annual planning, execution, and reporting in a single
          place — so your team always knows what matters now and what’s coming
          next.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </PageSection>
  );
}
