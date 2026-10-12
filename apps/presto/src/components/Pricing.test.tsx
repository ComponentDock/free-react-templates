import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('overlaps the hero with a reduced margin on smaller screens', () => {
    render(<Pricing />)
    const section = screen.getByRole('region', { name: 'Hosting plans' })
    expect(section).toHaveClass('lg:-mt-[138px]', 'sm:-mt-[78px]', 'mt-0')
  })

  it('renders three plan cards with price, five features and an outline CTA each', () => {
    render(<Pricing />)
    const cards = screen.getAllByRole('listitem').filter((item) => item.className === 'group')
    expect(cards).toHaveLength(3)

    for (const [index, name] of [
      'Starter Hosting',
      'Business Hosting',
      'Cloud Hosting',
    ].entries()) {
      const card = within(cards[index]!)
      expect(card.getByRole('heading', { name })).toBeInTheDocument()
      expect(card.getByText('Starting at')).toBeInTheDocument()
      expect(card.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#contact')
      expect(card.getAllByRole('listitem')).toHaveLength(5)
    }

    expect(screen.getByText('$4.67')).toBeInTheDocument()
    expect(screen.getByText('$9.42')).toBeInTheDocument()
    expect(screen.getByText('$18.75')).toBeInTheDocument()
    expect(screen.getAllByText('/ month')).toHaveLength(3)
  })

  it('marks the price in coral and the feature list as muted light copy', () => {
    render(<Pricing />)
    expect(screen.getByText('$4.67')).toHaveClass('text-coral')
    expect(screen.getByText('2 TB of SSD space')).toHaveClass('text-copy-muted', 'font-light')
  })

  it('renders the Get Started pill in the outline coral style that fills on hover', () => {
    render(<Pricing />)
    expect(screen.getAllByRole('link', { name: 'Get Started' })[0]).toHaveClass(
      'border-coral',
      'text-coral',
      'rounded-full',
      'group-hover:bg-brand',
    )
  })
})
