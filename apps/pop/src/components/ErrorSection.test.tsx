import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the pink 404 display, Oops heading, search form, and home link', () => {
    render(<ErrorSection />)

    const display = screen.getByRole('heading', { level: 1 })
    expect(display.textContent).toBe('404')
    expect(display).toHaveClass('text-brand')

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /oops, the page you are looking for can't be found/i,
    )

    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Search' })).toHaveAttribute(
      'placeholder',
      'Search...',
    )
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: /return to homepage/i })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('text-accent')
  })

  it('submits the search form to a search engine with the typed query', async () => {
    const user = userEvent.setup()
    render(<ErrorSection />)

    const input = screen.getByRole('textbox', { name: 'Search' })
    await user.type(input, 'lost page')

    const form = screen.getByRole('search')
    expect(form).toHaveAttribute('action', 'https://www.google.com/search')
    expect(form).toHaveAttribute('method', 'get')
    expect(input).toHaveAttribute('name', 'q')

    await user.click(screen.getByRole('button', { name: 'Search' }))
  })
})
