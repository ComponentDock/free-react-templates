import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    // Navbar & Footer both show "Forkful"
    const forkfulTexts = screen.getAllByText('Forkful')
    expect(forkfulTexts.length).toBeGreaterThanOrEqual(2)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // Welcome
    expect(screen.getByRole('heading', { level: 2, name: /welcome to/i })).toBeInTheDocument()

    // FoodMenu
    expect(screen.getByRole('heading', { level: 2, name: /we serve/i })).toBeInTheDocument()

    // ReservationCta
    expect(screen.getByText(/natural ingredients and tasty food/i)).toBeInTheDocument()

    // SpecialDishes
    expect(screen.getByRole('heading', { level: 2, name: /our special/i })).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('John Doe')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    expect(document.title).toBe('Forkful — Restaurant Landing Template')
  })
})
