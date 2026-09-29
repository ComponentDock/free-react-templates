import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchHero } from './SearchHero'

describe('SearchHero', () => {
  it('renders the heading', () => {
    render(<SearchHero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/search hotel/i)
  })

  it('renders a search input with placeholder', () => {
    render(<SearchHero />)
    expect(screen.getByPlaceholderText(/what are you looking for/i)).toBeInTheDocument()
  })

  it('renders check-in date input', () => {
    render(<SearchHero />)
    expect(screen.getByLabelText(/check-in/i)).toBeInTheDocument()
  })

  it('renders check-out date input', () => {
    render(<SearchHero />)
    expect(screen.getByLabelText(/check-out/i)).toBeInTheDocument()
  })

  it('renders guest count dropdown with options', () => {
    render(<SearchHero />)
    const select = screen.getByLabelText(/guests/i)
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '1 Adult' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '2 Adults' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '3 Adults' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: '4 Adults' })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)
    const input = screen.getByPlaceholderText(/what are you looking for/i)
    await user.type(input, 'Beach Resort')
    expect(input).toHaveValue('Beach Resort')
  })

  it('allows changing the guest count', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)
    const select = screen.getByLabelText(/guests/i)
    await user.selectOptions(select, '3')
    expect(select).toHaveValue('3')
  })

  it('allows setting check-in date', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)
    const checkIn = screen.getByLabelText(/check-in/i)
    await user.type(checkIn, '2025-12-25')
    expect(checkIn).toHaveValue('2025-12-25')
  })

  it('allows setting check-out date', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)
    const checkOut = screen.getByLabelText(/check-out/i)
    await user.type(checkOut, '2025-12-30')
    expect(checkOut).toHaveValue('2025-12-30')
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<SearchHero />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    expect(button).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<SearchHero />)
    const bgImg = container.querySelector('img[aria-hidden="true"]')
    expect(bgImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
