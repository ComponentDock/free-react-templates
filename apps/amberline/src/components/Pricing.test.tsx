import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders four plans with prices, six feature rows and a 60% button', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Pricing & Packages')
    const cards = screen.getAllByRole('listitem').filter((item) => item.className.includes('bg-white'))
    expect(cards).toHaveLength(4)
    for (const price of ['49K', '79K', '109K', '149K']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getByText('+')).toBeInTheDocument()
    expect(cards[0]!.querySelectorAll('li')).toHaveLength(6)
    const planLinks = screen.getAllByRole('link', { name: 'Choose plan' })
    expect(planLinks).toHaveLength(4)
    expect(planLinks[0]!.className).toContain('w-[60%]')
  })

  it('marks the premium card as featured with the Most Popular pill', () => {
    render(<Pricing />)
    const pill = screen.getByText('Most Popular')
    const card = pill.closest('li')
    expect(card?.className).toContain('border-brand')
    expect(card?.className).toContain('scale-[1.02]')
  })

  it('strikes through excluded features', () => {
    const { container } = render(<Pricing />)
    const struck = container.querySelectorAll('.line-through')
    expect(struck.length).toBeGreaterThan(0)
    expect(struck[0]!.textContent).toBe('3D walkthrough')
  })
})
