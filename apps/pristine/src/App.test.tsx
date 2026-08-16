import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pristine — Cleaning Services')
  })

  it('composes every section inside the main landmark in order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading')
    const headingTexts = headings.map((heading) => heading.textContent?.replace(/\s+/g, ' ').trim())
    expect(headingTexts).toEqual(
      expect.arrayContaining([
        expect.stringContaining('Best cleaning services'),
        expect.stringContaining('Take a look at the variety of services'),
        expect.stringContaining('We know how to build trust'),
        expect.stringContaining('Satisfaction'),
        expect.stringContaining('What Our Clients Say'),
        expect.stringContaining('Office Deep Clean'),
        expect.stringContaining('Home Move-Out'),
        expect.stringContaining('Expert Team Members'),
        expect.stringContaining('Get Free Phone Call'),
      ]),
    )
  })

  it('renders the top bar, header, CTA band and footer', () => {
    render(<App />)
    expect(screen.getByText(/Call for Free Estimate/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Pristine home' })).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Send Request' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
