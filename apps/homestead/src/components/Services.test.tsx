import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders the labeled heading and four icon feature columns', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'The smartest way to buy a home' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(services.length)
    for (const service of services) {
      const card = cards[services.indexOf(service)]!
      expect(
        within(card).getByRole('heading', { level: 3, name: service.title }),
      ).toBeInTheDocument()
      expect(within(card).getByText(service.blurb)).toBeInTheDocument()
    }
  })

  it('renders a pink icon inside each service column', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('svg.text-brand')
    expect(icons.length).toBe(services.length)
  })
})
