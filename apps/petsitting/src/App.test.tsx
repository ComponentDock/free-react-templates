import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Petsitting — Pet Sitting Services Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain(
      'Highest Quality Care For Pets',
    )
    expect(within(main).getByText('Why Choose Us?')).toBeInTheDocument()
    expect(within(main).getByText('Frequently Asks Questions')).toBeInTheDocument()
    expect(within(main).getByText('Happy Clients & Feedbacks')).toBeInTheDocument()
    expect(within(main).getByText('Choose Your Plan')).toBeInTheDocument()
    expect(within(main).getByText('Pets Gallery')).toBeInTheDocument()
    expect(within(main).getByText('Latest news from our blog')).toBeInTheDocument()
    expect(within(main).getByText('Free Consultation')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
