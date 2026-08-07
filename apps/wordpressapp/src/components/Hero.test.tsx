import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Eye catching design & sleek aesthetics' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/beautifully designed and extremely intuitive/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buy now' })).toHaveAttribute('href', '#features')
    expect(screen.getByRole('link', { name: 'More info' })).toHaveAttribute('href', '#about')
  })

  it('renders the phone mockup with a calendar app interface', () => {
    const { container } = render(<Hero />)

    const phone = container.querySelector('[data-testid="phone-mockup"]')
    expect(phone).not.toBeNull()
    expect(within(phone as HTMLElement).getByText('Good Morning!')).toBeInTheDocument()
    expect(within(phone as HTMLElement).getByText('FEBRUARY')).toBeInTheDocument()
    expect(within(phone as HTMLElement).getByText('Lunch with Diane')).toBeInTheDocument()
  })
})
