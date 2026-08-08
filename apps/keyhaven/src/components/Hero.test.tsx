import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the serif headline with the green accent phrase and sub-paragraph', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Find Your Dream Home/i)
    expect(heading.querySelector('span')).toHaveTextContent('Dream Home')
    expect(
      screen.getByText(/Discover luxury properties in the most prestigious neighborhoods/i),
    ).toBeInTheDocument()
  })

  it('shows the background photo with a dark gradient overlay', () => {
    render(<Hero />)
    const image = screen.getByRole('img', { name: /luxury home/i })
    expect(image).toBeInTheDocument()
    expect(image.parentElement?.querySelector('.bg-gradient-to-t')).toBeInTheDocument()
  })

  it('shows the three quick stats', () => {
    render(<Hero />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('Properties Listed')).toBeInTheDocument()
    expect(screen.getByText('$2B+')).toBeInTheDocument()
    expect(screen.getByText('Sales Volume')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })

  it('renders the search card with Buy/Rent/Sell tabs, three selects and a Search button', () => {
    render(<Hero />)
    const buy = screen.getByRole('button', { name: 'Buy' })
    expect(buy).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Rent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sell' })).toBeInTheDocument()

    const location = screen.getByLabelText(/Location/i)
    expect(location).toBeInTheDocument()
    expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Price Range/i)).toBeInTheDocument()

    for (const option of [
      'Manhattan',
      'Brooklyn',
      'Queens',
      'The Hamptons',
      'Westchester',
      'Greenwich',
    ]) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    for (const option of ['House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Commercial']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    for (const option of ['Under $1M', '$1M - $2.5M', '$2.5M - $5M', '$5M - $10M', '$10M+']) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('switches the active tab and the hidden status value', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.getByDisplayValue('for-sale')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Rent' }))
    expect(screen.getByRole('button', { name: 'Rent' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Buy' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByDisplayValue('for-rent')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sell' }))
    expect(screen.getByRole('button', { name: 'Sell' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByDisplayValue('sell')).toBeInTheDocument()
  })

  it('submits the search form client-side without navigating', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByDisplayValue('for-sale')).toBeInTheDocument()
  })
})
