import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with name, price, and per-month label', () => {
    render(<Pricing />)

    const section = screen.getByRole('region', { name: /choose a plan/i })
    const heading = within(section).getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Choose a plan that right for your business')

    const plans = within(section).getAllByRole('listitem')
    expect(plans).toHaveLength(3)

    expect(within(plans[0] as HTMLElement).getByText('Starter Plan')).toBeInTheDocument()
    expect(within(plans[0] as HTMLElement).getByText('Free')).toBeInTheDocument()
    expect(within(plans[1] as HTMLElement).getByText('Business Plan')).toBeInTheDocument()
    expect(within(plans[1] as HTMLElement).getByText('$39.00')).toBeInTheDocument()
    expect(within(plans[2] as HTMLElement).getByText('Premium Plan')).toBeInTheDocument()
    expect(within(plans[2] as HTMLElement).getByText('$59.00')).toBeInTheDocument()

    expect(within(plans[0] as HTMLElement).getByText('Per month')).toBeInTheDocument()
  })

  it('renders a Start Now button on every plan', () => {
    render(<Pricing />)

    const section = screen.getByRole('region', { name: /choose a plan/i })
    const startNow = within(section).getAllByRole('link', { name: /start now/i })
    expect(startNow).toHaveLength(3)
  })

  it('highlights the featured Business plan price in brand blue', () => {
    render(<Pricing />)

    const section = screen.getByRole('region', { name: /choose a plan/i })
    const plans = within(section).getAllByRole('listitem')
    const price = within(plans[1] as HTMLElement).getByText('$39.00')
    expect(price.className).toContain('text-brand')

    const links = within(section).getAllByRole('link', { name: /start now/i })
    expect(links[0]).toHaveAttribute('href', '#cta')
  })
})
