import { MailOpen } from "lucide-react";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mediconnect" },
    { name: "description", content: "Welcome to Mediconnect!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <div className="flex flex-1">
          <main className="flex-1 overflow-y-auto">
            <div className="space-y-20 px-6 py-8">
              {/* Hero Section */}
              <section className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Your Health, Our Priority
                </h1>

                <div className="overflow-hidden rounded-md bg-muted/30 py-4">
                  <p className="animate-marquee whitespace-nowrap text-xl font-light text-foreground/80">
                    Professional Healthcare • Quality Medications • Expert
                    Pharmacists • Healthcare Consultations • Personalized
                    Service
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Prescriptions
                    </h3>
                    <p className="text-muted-foreground">
                      Fast and accurate prescription fulfillment with care and
                      precision.
                    </p>
                    <div className="mt-4 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Consultations
                    </h3>
                    <p className="text-muted-foreground">
                      Speak with our expert pharmacists about your health
                      concerns.
                    </p>
                    <div className="mt-4 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      Health Products
                    </h3>
                    <p className="text-muted-foreground">
                      Browse our selection of high-quality health and wellness
                      products.
                    </p>
                    <div className="mt-4 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
              </section>
                <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8 text-center shadow-sm">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Experience the MediConnect Difference
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Join thousands of satisfied patients who trust us with their
                    healthcare needs.
                  </p>
                  <Button size="lg">Get Started Today</Button>
                </div>

              {/* Featured Services */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold">Featured Services</h2>

                <div className="overflow-hidden rounded-md bg-muted/30 py-4">
                  <p className="animate-marquee-reverse whitespace-nowrap text-xl font-light text-foreground/80">
                    Medication Management • Health Screenings • Vaccinations •
                    Specialty Medications • Compounding Services
                  </p>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-background p-8">
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div>
                      <h3 className="mb-4 text-2xl font-semibold">
                        MediConnect Advantage
                      </h3>
                      <p className="max-w-lg text-muted-foreground">
                        Our dedicated team of pharmacists brings years of
                        experience and expertise to provide you with the highest
                        standard of pharmaceutical care.
                      </p>
                    </div>
                    <Button className="group self-start whitespace-nowrap">
                      Learn More
                      <MailOpen className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold">What Our Patients Say</h2>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                    <p className="mb-4 italic text-muted-foreground">
                      "The pharmacists at MediConnect take the time to explain
                      my medications and answer all my questions. I've never
                      received better care."
                    </p>
                    <p className="font-medium">- Sarah Johnson</p>
                  </div>
                  <div className="rounded-lg border bg-card p-6 transition-all hover:shadow-md">
                    <p className="mb-4 italic text-muted-foreground">
                      "I appreciate how MediConnect uses technology while still
                      providing personalized service. Their mobile app makes
                      refills so convenient!"
                    </p>
                    <p className="font-medium">- Michael Chen</p>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="space-y-8">
                <div className="overflow-hidden rounded-md bg-muted/30 py-4">
                  <p className="animate-marquee whitespace-nowrap text-xl font-light text-foreground/80">
                    Modern Healthcare • Trusted Service • Community Focused •
                    Innovative Solutions • Patient-Centered Approach
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
