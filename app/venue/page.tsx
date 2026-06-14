import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { MapPin, Plane, Hotel, Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Venue & Travel — PCCOE Summer School 2026',
  description:
    'PCCOE Summer School 2026 is held at Pimpri Chinchwad College of Engineering, Sector 26, Pradhikaran, Nigdi, Pune 411044, Maharashtra, India. Travel, accommodation, and local info.',
  alternates: { canonical: 'https://pccoesummerschool.vercel.app/venue' },
  openGraph: {
    title: 'Venue & Travel — PCCOE Summer School 2026',
    description: 'Located at PCCoE Pune — GPU-enabled labs, world-class facilities. Directions, accommodation, and Pune travel guide for participants.',
    url: 'https://pccoesummerschool.vercel.app/venue',
  },
}

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Venue & Travel</h1>
          <p className="text-xl text-muted-foreground">
            Join us at Pimpri Chinchwad College of Engineering in Pune, India
          </p>
        </div>
      </section>

      {/* Venue Location */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Pimpri Chinchwad College of Engineering</h2>
              <p className="text-lg text-muted-foreground mb-2">CSE (AI & ML) Department</p>
              <p className="text-foreground font-mono">Sector 26, Pradhikaran, Nigdi, Pune - 411044, Maharashtra, India</p>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">About the Venue</h3>
            <p className="text-foreground mb-4">
              Pimpri Chinchwad College of Engineering (PCCoE) is one of the premier engineering institutions in Pune, affiliated with Savitribai Phule Pune University. The campus features state-of-the-art computing laboratories with GPU-enabled workstations, modern classrooms, a fully equipped auditorium, reliable high-speed internet, and comfortable spaces for learning and networking.
            </p>
            <p className="text-foreground">
              Located in the rapidly growing Pradhikaran area, the venue provides excellent infrastructure for an intensive 6-day residential program. PCCoE contributes in-kind support including all classroom spaces, computer laboratories, and AV equipment, ensuring the IEEE CIS grant is fully directed toward student support and educational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Getting to Pune</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Air Travel</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Pune Airport (PNQ)</strong>
                  <p className="text-sm">~25 km from venue, ~45-60 minutes by taxi (INR 400-600)</p>
                </li>
                <li>
                  <strong className="text-foreground">Mumbai Airport (BOM)</strong>
                  <p className="text-sm">~200 km away, 3-4 hours by cab or expressway bus</p>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 text-primary">🚇</div>
                <h3 className="text-xl font-bold text-foreground">Local Transport</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Auto-rickshaw / Uber / Ola</strong>
                  <p className="text-sm">Available throughout Pune and Nigdi for convenient travel</p>
                </li>
                <li>
                  <strong className="text-foreground">Local Train (EMU)</strong>
                  <p className="text-sm">Chinchwad Station (~4 km away) or Akurdi Station (~2 km away)</p>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-background rounded-lg p-6 border border-border">
            <h3 className="font-bold text-foreground mb-2">Getting from Pune Airport to PCCoE Venue</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-primary">1.</span>
                <span>Exit the airport terminal and head to the prepaid taxi booth or booking zone.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">2.</span>
                <span>Book an Ola, Uber, or Prepaid Taxi to PCCoE Campus, Sector 26, Pradhikaran, Nigdi.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">3.</span>
                <span>The journey usually takes 45-60 minutes depending on traffic (~25 km, costing INR 400-600).</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-primary">4.</span>
                <span>PCCoE Campus is a well-known landmark in the Nigdi Pradhikaran area.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Accommodation</h2>

          <div className="flex items-start gap-4 mb-8">
            <Hotel className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Accommodation Options</h3>
              <p className="text-muted-foreground mb-6">
                We provide free accommodation for participants on campus. Alternatively, there are budget-friendly hotels located close to the campus.
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {[
              {
                name: 'PCCoE Campus Hostel & Guest House',
                distance: 'On-campus (1-2 mins walk)',
                note: 'Free for registered offline participants (basic meals, Wi-Fi, and campus access included; first-come, first-served)',
              },
              {
                name: 'Sentosa Resorts and Water Park',
                distance: '10 mins drive (~5 km)',
                note: 'Premium resort option with modern amenities',
              },
              {
                name: 'Local Budget Hotels (Nigdi / Akurdi)',
                distance: '5-15 mins drive',
                note: 'Budget-friendly hotels near PCCoE at INR 5,000 - 7,000 per night',
              },
            ].map((hotel, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <h4 className="font-bold text-foreground mb-1">{hotel.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{hotel.distance}</p>
                <p className="text-sm text-primary font-medium">{hotel.note}</p>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-6 border border-border">
            <p className="text-foreground">
              <strong>Note:</strong> Booking information and hostel request forms will be provided upon registration. We recommend registering early to secure the free hostel guest house rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Dining</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">At the Venue</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Daily tea/coffee breaks and lunch are provided on-campus as part of your registration. We offer options including local Maharashtrian, Indian, and vegetarian meals.
              </p>
              <p className="text-sm text-muted-foreground">Please indicate dietary restrictions during registration.</p>
            </Card>

            <Card className="p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Around Campus</h3>
              </div>
              <p className="text-muted-foreground">
                The local Nigdi/Pradhikaran area around PCCoE has numerous dining options, including local Maharashtrian cuisine and global fast-food chains. Budget for INR 200-500 for a meal outside the venue.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Practical Tips</h2>

          <div className="space-y-4">
            {[
              {
                title: 'Currency & Payment',
                text: 'India uses the Indian Rupee (INR). ATMs are widely available. Cash, credit/debit cards, and UPI (Unified Payments Interface) mobile payments are widely used.',
              },
              {
                title: 'UPI Payments',
                text: 'UPI is highly popular and convenient in India for even small payments. You can set it up via apps like GPay, PhonePe, or Paytm if you have an active Indian banking link.',
              },
              {
                title: 'Weather & Packing',
                text: 'Late June brings pleasant weather to Pune, often with light monsoon showers (22-30°C). We recommend bringing a light jacket/umbrella.',
              },
              {
                title: 'Language',
                text: 'English, Hindi, and Marathi are widely spoken. English is the medium of instruction for all summer school sessions and is understood in local professional areas.',
              },
              {
                title: 'Internet & Connectivity',
                text: 'High-speed Wi-Fi is provided on the PCCoE campus. Pre-paid SIM cards (Jio, Airtel) can be purchased easily at the airport or in town.',
              },
              {
                title: 'Local Transport',
                text: 'Auto-rickshaws, Ola, and Uber are readily available for travel within Nigdi and Pune.',
              },
            ].map((tip, idx) => (
              <div key={idx} className="border-l-4 border-l-primary pl-6 py-2">
                <h4 className="font-bold text-foreground mb-1">{tip.title}</h4>
                <p className="text-muted-foreground text-sm">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Logistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Travel?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is happy to help with visa questions, travel planning, or any logistics
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
