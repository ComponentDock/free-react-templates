import {
  BookOpen,
  Dumbbell,
  GraduationCap,
  Home,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { FEATURES, OFFER_HEADLINE, OFFER_IMAGE, type Feature } from '../data'

const FEATURE_ICONS: Record<Feature['icon'], LucideIcon> = {
  safety: ShieldCheck,
  classes: BookOpen,
  teachers: GraduationCap,
  classrooms: Home,
  lessons: Lightbulb,
  sports: Dumbbell,
}

/**
 * WhatWeOffer — split section: framed photo left, "What We Offer"
 * heading with copy and six orange-icon feature rows (2-column grid on
 * desktop) right.
 */
export function WhatWeOffer() {
  return (
    <section id="about-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <figure className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-4 border-t-4 border-primary" />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-primary" />
            <img
              src={OFFER_IMAGE}
              alt="Students collaborating on campus"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </figure>

          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">{OFFER_HEADLINE}</h2>
            <p className="mt-4 text-gray-500">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {FEATURES.map((feature) => {
                const Icon = FEATURE_ICONS[feature.icon]
                return (
                  <div key={feature.title} className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.blurb}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
