interface DarkCardProps {
  children: React.ReactNode
}

export function DarkCard({ children }: DarkCardProps) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-[5px] bg-card-dark shadow-lg">
      <div className="flex flex-col md:flex-row">{children}</div>
    </div>
  )
}

export function DarkCardDivider() {
  return (
    <div data-testid="divider" className="hidden w-px bg-divider md:block" aria-hidden="true" />
  )
}
