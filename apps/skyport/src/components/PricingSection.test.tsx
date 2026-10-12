import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PricingSection } from './PricingSection'

describe('PricingSection', () => {
  it('renders a centred title block above three plan cards', () => {
    const { container } = render(<PricingSection />)

    expect(container.querySelector('section')).toHaveAttribute('id', 'plan')
    expect(screen.getByText('Choose the Plan That Fits Your Team')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(4)
    expect(container.querySelectorAll('.group')).toHaveLength(3)
    expect(container.querySelector('.grid')).toHaveClass('lg:grid-cols-3')
  })

  it('puts each plan name, audience and price in the card head', () => {
    render(<PricingSection />)

    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('For solo builders')).toBeInTheDocument()
    expect(screen.getByText('$19')).toBeInTheDocument()
    expect(screen.getByText('Studio')).toBeInTheDocument()
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('Scale')).toBeInTheDocument()
    expect(screen.getByText('For large product teams')).toBeInTheDocument()
    expect(screen.getByText('$75')).toBeInTheDocument()
  })

  it('lists five features and a square dark purchase button per card', () => {
    render(<PricingSection />)

    expect(screen.getAllByRole('listitem')).toHaveLength(15)
    expect(screen.getByText('2.5 GB managed storage')).toBeInTheDocument()
    expect(screen.getByText('Off-site backup archive')).toBeInTheDocument()

    const buttons = screen.getAllByRole('button', { name: /Purchase Plan/ })
    expect(buttons).toHaveLength(3)
    buttons.forEach((button) => {
      expect(button).toHaveClass('rounded-none', 'bg-dark', 'uppercase')
    })
  })

  it('squares the cards and flips their lower half to brand blue on hover', () => {
    const { container } = render(<PricingSection />)

    const card = container.querySelector('.group')
    expect(card).toHaveClass(
      'bg-surface-soft',
      'hover:shadow-[0_20px_20px_0_rgba(157,157,157,0.5)]',
      'focus-within:shadow-[0_20px_20px_0_rgba(157,157,157,0.5)]',
    )

    const sections = card?.querySelectorAll('div')
    const flip = container.querySelectorAll('.group-hover\\:bg-brand')
    expect(flip.length).toBeGreaterThan(0)
    expect(sections?.length).toBeGreaterThan(0)
  })

  it('keeps the head sections square with hairline dividers', () => {
    const { container } = render(<PricingSection />)

    const hairlines = container.querySelectorAll('.border-b.border-line')
    expect(hairlines).toHaveLength(6)
    hairlines.forEach((section) => {
      expect(section).toHaveClass('px-[40px]', 'pt-[40px]', 'pb-[22px]')
    })
  })

  it('inverts the purchase button to a white surface on card hover or focus', () => {
    const { container } = render(<PricingSection />)

    const button = screen.getAllByRole('button', { name: /Purchase Plan/ })[0]
    expect(button).toHaveClass('group-hover:bg-surface', 'group-hover:text-ink')
    expect(button).toHaveClass('group-focus-within:bg-surface', 'group-focus-within:text-ink')
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(3)
  })
})
