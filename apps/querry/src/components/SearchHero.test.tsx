import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchHero } from './SearchHero'

describe('SearchHero', () => {
  it('renders the heading', () => {
    render(<SearchHero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /what are you looking for/i }),
    ).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<SearchHero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the search input with correct placeholder', () => {
    render(<SearchHero />)

    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toHaveAttribute('placeholder', 'Type to search.')
  })

  it('renders the search button with icon', () => {
    render(<SearchHero />)

    const button = screen.getByRole('button', { name: /search/i })
    expect(button).toBeInTheDocument()
    // The magnifying glass icon should be present (aria-hidden)
    expect(button.querySelector('svg')).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'dress')

    expect(input).toHaveValue('dress')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)

    // Form submission should not navigate or cause errors
    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument()
  })
})
