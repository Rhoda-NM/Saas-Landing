import PageSection from "../components/layout/PageSection";
import Button from "../components/ui/Button";
import FeaturesSection from "../components/sections/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-b from-hero-start via-hero-mid to-hero-end">
        <PageSection className="text-text-headline">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left: text */}
            <div className="space-y-6">
              {/* Pill */}
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs text-text-sub">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                New • Plan and deliver your year with DevFlow
              </span>

              {/* Headline */}
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-text-headline">
                Annual planning,
                <br />
                <span className="text-brand">without the chaos.</span>
              </h1>

              {/* Subtext */}
              <p className="text-sm md:text-base text-text-sub max-w-xl leading-relaxed">
                DevFlow helps product and engineering teams turn big yearly goals
                into focused, trackable work. Plan, align, and ship — all in one
                workspace.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg">Start free trial</Button>
                <Button variant="outline" size="lg">
                  Book a demo
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 text-xs text-text-sub">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-card-base border border-card-divider" />
                  <div className="h-8 w-8 rounded-full bg-card-light border border-card-divider" />
                  <div className="h-8 w-8 rounded-full bg-brand border border-card-divider" />
                </div>
                <p>
                  Trusted by{" "}
                  <span className="font-medium text-text-headline">
                    2,500+ product teams
                  </span>
                </p>
              </div>
            </div>

            {/* Right: mock dashboard card */}
            <div className="relative mt-4 md:mt-0">
              {/* Glow */}
              <div className="absolute -inset-6 bg-brand/25 blur-3xl rounded-3xl opacity-70" />
              <div className="relative bg-card-base rounded-2xl shadow-soft border border-card-divider p-4 md:p-6">
                {/* Top row */}
                <div className="flex items-center justify-between mb-4 text-xs">
                  <div className="space-y-1">
                    <p className="text-text-gray uppercase tracking-wide text-[0.65rem]">
                      Annual planning
                    </p>
                    <p className="text-text-dark font-semibold text-sm">
                      2025 Roadmap
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-green/10 text-accent-green px-2 py-1 text-[0.65rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                    On track
                  </span>
                </div>

                {/* Simple "timeline" */}
                <div className="space-y-3 mb-4">
                  <div className="h-2 rounded-full bg-card-light overflow-hidden">
                    <div className="h-full w-3/4 bg-accent-blue" />
                  </div>
                  <div className="flex justify-between text-[0.65rem] text-text-gray">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>

                {/* Mini cards row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="rounded-xl bg-card-light p-3">
                    <p className="text-[0.65rem] text-text-gray mb-1">
                      Initiatives
                    </p>
                    <p className="text-text-dark font-semibold text-lg">12</p>
                  </div>
                  <div className="rounded-xl bg-card-light p-3">
                    <p className="text-[0.65rem] text-text-gray mb-1">
                      In progress
                    </p>
                    <p className="text-accent-blue font-semibold text-lg">7</p>
                  </div>
                  <div className="rounded-xl bg-card-light p-3">
                    <p className="text-[0.65rem] text-text-gray mb-1">
                      At risk
                    </p>
                    <p className="text-accent-orange font-semibold text-lg">2</p>
                  </div>
                </div>

                {/* Bottom placeholder box */}
                <div className="rounded-xl border border-card-divider bg-card-light/60 p-3 text-[0.7rem] text-text-gray">
                  <p className="font-medium text-text-dark mb-1">
                    This week&apos;s focus
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Align Q2 milestones with engineering capacity</li>
                    <li>Finalize launch timeline for DevFlow 2.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </section>

      {/* Placeholder sections we’ll fill later */}
      <FeaturesSection />

      {/* More sections (Pricing, Testimonials, FAQ, Final CTA) will come later */}
    </main>
  );
}
