import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find Your Dream Car')
  })

  it('renders the subheadline', () => {
    render(<Hero />)
    expect(screen.getByText('Buy Your Dream Car')).toBeInTheDocument()
  })

  it('renders car model and price', () => {
    render(<Hero />)
    expect(screen.getByText('Toyota Camry')).toBeInTheDocument()
    expect(screen.getByText('$299/mo')).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Test Drive' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('renders search tabs', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Car Rental' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy Car' })).toBeInTheDocument()
  })

  it('switches active tab on click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const buyTab = screen.getByRole('button', { name: 'Buy Car' })
    await user.click(buyTab)
    expect(buyTab).toHaveClass('text-primary-500')
  })

  it('renders select dropdowns', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Year')).toBeInTheDocument()
    expect(screen.getByLabelText('Brand')).toBeInTheDocument()
    expect(screen.getByLabelText('Model')).toBeInTheDocument()
    expect(screen.getByLabelText('Mileage')).toBeInTheDocument()
    expect(screen.getByLabelText('PriceRange')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('form submission prevents default', () => {
    render(<Hero />)
    const form = screen.getByRole('button', { name: /search/i }).closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    submitEvent.preventDefault = preventDefault
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
