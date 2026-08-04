import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Doglife — Dog Care Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain('We Love')
    expect(within(main).getByText('Welcome To Our Website')).toBeInTheDocument()
    expect(within(main).getByText('Happy Pets')).toBeInTheDocument()
    expect(within(main).getByText('Modern Equipment')).toBeInTheDocument()
    expect(
      within(main).getByRole('heading', { name: 'Meet Jean Smith Our Dog Veterenarian' }),
    ).toBeInTheDocument()
    expect(within(main).getByText('Pricing Table')).toBeInTheDocument()
    expect(within(main).getByText('Frequently Ask Questions')).toBeInTheDocument()
    expect(within(main).getByText('Happy Customers')).toBeInTheDocument()
    expect(within(main).getByText('Doglife Blog')).toBeInTheDocument()
    expect(within(main).getByText('Our Services')).toBeInTheDocument()
    expect(within(main).getByText('Contact Form')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
