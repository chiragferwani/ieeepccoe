import { Card } from '@/components/ui/card'
import { RegistrationTier } from '@/data/registration'
import { CheckCircle2 } from 'lucide-react'

interface RegistrationCardProps {
  tier: RegistrationTier
  mode: 'online' | 'offline'
  onRegisterClick: () => void
}

export function RegistrationCard({ tier, mode, onRegisterClick }: RegistrationCardProps) {
  const priceData = tier.prices[mode]
  const currencySymbol = tier.currency === 'USD' ? '$' : '₹'
  const isFree = priceData.earlyBird === 0 && priceData.standard === 0

  return (
    <Card
      className={`flex flex-col h-full border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        tier.highlighted ? 'border-primary shadow-lg scale-105 md:scale-100' : 'border-border'
      }`}
    >
      {tier.highlighted && (
        <div className="bg-primary text-primary-foreground py-2 px-4 text-center font-semibold text-sm">
          Most Popular
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
        <p className="text-sm text-muted-foreground mb-6">{tier.targetAudience}</p>

        {/* Price Section */}
        <div className="mb-6">
          {!isFree ? (
            <>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-primary">
                  {currencySymbol}{priceData.earlyBird}
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  {currencySymbol}{priceData.standard}
                </span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 font-semibold">
                Early bird: Until June 5, 2026
              </p>
            </>
          ) : (
            <div className="text-4xl font-bold text-primary mb-1">Free</div>
          )}
          <p className="text-xs text-muted-foreground">per person ({mode === 'online' ? 'Online/Virtual' : 'Offline/In-person'})</p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8 flex-1">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onRegisterClick}
          className={`w-full py-3 px-4 rounded-md font-semibold text-center transition-colors ${
            tier.highlighted
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
          }`}
        >
          Register Now
        </button>
      </div>
    </Card>
  )
}
