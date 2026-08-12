import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and subtitle', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: /The package 4 you/ })).toBeInTheDocument()
  })

  it('renders three plan cards with price, features, and order button', () => {
    render(<Pricing />)

    const beginnerCard = screen.getByText(/^beginner$/i).closest('article') as HTMLElement
    expect(beginnerCard).not.toBeNull()
    expect(within(beginnerCard).getByText('Free')).toBeInTheDocument()
    expect(within(beginnerCard).getByText('Always')).toBeInTheDocument()

    const recommended = screen.getByText(/^recommended$/i).closest('article') as HTMLElement
    expect(within(recommended).getByText('$29')).toBeInTheDocument()
    expect(within(recommended).getByText('.90')).toBeInTheDocument()
    expect(within(recommended).getByText('Per Month')).toBeInTheDocument()

    const professional = screen.getByText(/^professional$/i).closest('article') as HTMLElement
    expect(within(professional).getByText('$59')).toBeInTheDocument()
    expect(within(professional).getByText('.90')).toBeInTheDocument()
    expect(within(professional).getByText('Per Month')).toBeInTheDocument()

    for (const card of [beginnerCard, recommended, professional]) {
      for (const feature of [
        '2 E-mail Addresses',
        '25 GB Space',
        '24h Live Support',
        'Documentation inside',
        'SEO Plan',
      ]) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
      expect(within(card).getByRole('button', { name: /order plan/i })).toBeInTheDocument()
    }
  })
})
