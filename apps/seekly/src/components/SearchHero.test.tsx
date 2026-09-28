import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchHero } from './SearchHero'

describe('SearchHero', () => {
  it('renders the heading and search form', () => {
    render(<SearchHero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /discover the amazing city/i }),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('Search query')).toHaveAttribute(
      'placeholder',
      'What are you looking for?',
    )
    expect(screen.getByLabelText('Location')).toHaveAttribute('placeholder', 'location')
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the background image', () => {
    const { container } = render(<SearchHero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('allows typing in the search inputs', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)

    const queryInput = screen.getByLabelText('Search query')
    const locationInput = screen.getByLabelText('Location')

    await user.type(queryInput, 'restaurants')
    await user.type(locationInput, 'New York')

    expect(queryInput).toHaveValue('restaurants')
    expect(locationInput).toHaveValue('New York')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)

    // Form submission should not navigate or cause errors
    expect(screen.getByLabelText('Search query')).toBeInTheDocument()
  })
})
