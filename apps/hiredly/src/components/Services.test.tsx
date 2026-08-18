import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four icon service cards on the light background', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: /we help companies/i })
    const heading = within(section).getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('We help companies to find talents')

    const cards = within(section).getAllByRole('listitem')
    expect(cards).toHaveLength(4)

    expect(within(cards[0] as HTMLElement).getByText('Talent Sourcing')).toBeInTheDocument()
    expect(within(cards[1] as HTMLElement).getByText('Team Building')).toBeInTheDocument()
    expect(within(cards[2] as HTMLElement).getByText('Fast Hiring')).toBeInTheDocument()
    expect(within(cards[3] as HTMLElement).getByText('Verified Employers')).toBeInTheDocument()
  })

  it('renders an icon inside every service card', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: /we help companies/i })
    expect(section.querySelectorAll('svg')).toHaveLength(4)
  })
})
