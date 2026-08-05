import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Dogger — Dog Care Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain('We Care For')
    expect(within(main).getByText('Welcome to Dogger Pet Care')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(within(main).getByText('Our Trainers')).toBeInTheDocument()
    expect(within(main).getByText('Pricing Table')).toBeInTheDocument()
    expect(within(main).getByText('Frequently Ask Questions')).toBeInTheDocument()
    expect(within(main).getByText('Happy Customers')).toBeInTheDocument()
    expect(within(main).getByText('Photo Gallery')).toBeInTheDocument()
    expect(within(main).getByText('Dogger Blog')).toBeInTheDocument()
    expect(within(main).getByText('Our Services')).toBeInTheDocument()
    expect(within(main).getByText('Contact Form')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  }, 15000)
})
