import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResponseTiers } from '../components/ResponseTiers'
import { TIERS } from '../data'

describe('ResponseTiers', () => {
  it('renders the dark band head with the eyebrow in the dark tone', () => {
    render(<ResponseTiers />)

    expect(screen.getByText('Response')).toHaveClass('text-primary-400')
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Three tiers, and what happens when we miss one',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
  })

  it('renders the three tiers with their monospaced SLA and both definitions', () => {
    render(<ResponseTiers />)

    TIERS.forEach((tier) => {
      expect(screen.getByRole('heading', { level: 3, name: tier.name })).toBeInTheDocument()
      expect(screen.getByText(tier.sla)).toHaveClass('font-mono', 'tabular-nums')
      expect(screen.getByText(tier.qualifies)).toBeInTheDocument()
      expect(screen.getByText(tier.remedy)).toBeInTheDocument()
    })

    expect(screen.getByText('2 hours')).toBeInTheDocument()
    expect(screen.getByText('Next working day')).toBeInTheDocument()
    expect(screen.getByText('On the agreed date')).toBeInTheDocument()
    expect(screen.getAllByText('What qualifies')).toHaveLength(3)
    expect(screen.getAllByText('If we miss it')).toHaveLength(3)
  })

  it('marks only the first card as featured', () => {
    render(<ResponseTiers />)

    const featured = screen
      .getByRole('heading', { level: 3, name: 'Priority one' })
      .closest('article')
    const plain = screen.getByRole('heading', { level: 3, name: 'Priority two' }).closest('article')

    expect(featured).toHaveClass('border-primary-400', 'bg-white/[0.07]')
    expect(plain).toHaveClass('border-white/10', 'bg-white/5')
  })

  it('keeps the sample-data disclosure beside the CTA into the inclusions', () => {
    render(<ResponseTiers />)

    expect(screen.getByText(/Sample tiers and remedies for demonstration/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See what an agreement covers' })).toHaveAttribute(
      'href',
      '#agreement',
    )
  })
})
