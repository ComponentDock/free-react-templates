import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the 404 headline with the middle zero in the brand color', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/404/)

    const zero = heading.querySelector('span')
    expect(zero).not.toBeNull()
    expect(zero?.textContent).toBe('0')
    expect(zero?.className).toContain('text-brand')
  })

  it('renders the uppercase error message heading', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /the page you requested could not found/i,
    )
  })

  it('renders a search form with a labeled text input and a search button', () => {
    render(<ErrorSection />)

    const input = screen.getByRole('textbox', { name: 'Search' })
    expect(input).toHaveAttribute('placeholder', 'Search...')

    const button = screen.getByRole('button', { name: 'Search' })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('submits the query to the search endpoint with the encoded value', async () => {
    const user = userEvent.setup()
    render(<ErrorSection />)

    const form = screen.getByRole('search')
    expect(form).toHaveAttribute('action', 'https://www.google.com/search')

    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'blue sky 404')

    const input = screen.getByRole('textbox', { name: 'Search' }) as HTMLInputElement
    expect(input.value).toBe('blue sky 404')
    expect(input).toHaveAttribute('name', 'q')
  })
})
