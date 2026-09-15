import { Camera, Headphones, Link2, Play } from 'lucide-react'
import { sermonAvatar, sermonCategory, sermonDate, sermonQuote, sermonSpeaker } from '../data'

export function Sermon() {
  return (
    <section className="border-b border-border bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 sm:flex-row sm:items-start sm:px-6">
        <img
          src={sermonAvatar}
          alt={sermonSpeaker}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-brand">{sermonQuote}</h2>
          <p className="mt-2 text-sm text-muted">
            Message from <span className="font-semibold text-heading">{sermonSpeaker}</span>,{' '}
            {sermonDate}. Category:{' '}
            <span className="font-semibold text-brand">{sermonCategory}</span>
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Play, label: 'Watch sermon' },
            { icon: Headphones, label: 'Listen to sermon' },
            { icon: Camera, label: 'Photo gallery' },
            { icon: Link2, label: 'Related links' },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand hover:text-brand"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
