import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Petvet — Pet Care & Veterinary Website Template')

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toContain(
      'The Kind of Care Your Pets Deserve',
    )
    expect(within(main).getByText('Veterinary Service')).toBeInTheDocument()
    expect(within(main).getByText('We Are Best Agency For Your Pets')).toBeInTheDocument()
    expect(within(main).getByText('Our Groomers')).toBeInTheDocument()
    expect(within(main).getByText('happy Customers Says')).toBeInTheDocument()
    expect(within(main).getByText('Affordable Packages')).toBeInTheDocument()
    expect(within(main).getByText('Latest Blog Updates')).toBeInTheDocument()

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
