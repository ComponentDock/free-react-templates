import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServicesAndTestimonials } from './ServicesAndTestimonials'

describe('ServicesAndTestimonials', () => {
  it('renders the services heading', () => {
    render(<ServicesAndTestimonials />)
    const headings = screen.getAllByRole('heading', { name: /experience great services/i })
    expect(headings.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the testimonials heading', () => {
    render(<ServicesAndTestimonials />)
    expect(screen.getByRole('heading', { name: /satisfied customer/i })).toBeInTheDocument()
  })

  it('renders all 3 service items', () => {
    render(<ServicesAndTestimonials />)
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServicesAndTestimonials />)
    expect(screen.getByText(/Complete building construction/)).toBeInTheDocument()
    expect(screen.getByText(/Creative and functional interior design/)).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock customer support/)).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<ServicesAndTestimonials />)
    expect(screen.getByText(/Absolutely outstanding work/)).toBeInTheDocument()
    expect(screen.getByText('John Anderson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
  })

  it('renders testimonial avatar image', () => {
    render(<ServicesAndTestimonials />)
    const avatar = screen.getByRole('img', { name: 'John Anderson' })
    expect(avatar).toHaveAttribute('src', 'https://picsum.photos/seed/nectar-testimonial-1/60/60')
  })

  it('renders testimonial navigation dots', () => {
    render(<ServicesAndTestimonials />)
    expect(screen.getByRole('tablist', { name: /testimonial navigation/i })).toBeInTheDocument()
  })

  it('renders 3 testimonial dots', () => {
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
  })

  it('first testimonial dot is selected by default', () => {
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates to second testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[1]!)
    expect(screen.getByText(/Professional, reliable/)).toBeInTheDocument()
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates to third testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[2]!)
    expect(screen.getByText(/From start to finish/)).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates back to first testimonial', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[2]!)
    await user.click(tabs[0]!)
    expect(screen.getByText(/Absolutely outstanding work/)).toBeInTheDocument()
    expect(screen.getByText('John Anderson')).toBeInTheDocument()
  })

  it('renders the quote icon with aria-hidden', () => {
    const { container } = render(<ServicesAndTestimonials />)
    const hiddenIcons = container.querySelectorAll('[aria-hidden="true"]')
    expect(hiddenIcons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders service icons with aria-hidden', () => {
    const { container } = render(<ServicesAndTestimonials />)
    const hiddenIcons = container.querySelectorAll('[aria-hidden="true"]')
    expect(hiddenIcons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders testimonial role for second testimonial', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[1]!)
    expect(screen.getByText('Director, Innovate LLC')).toBeInTheDocument()
  })

  it('renders testimonial role for third testimonial', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[2]!)
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('updates avatar image when testimonial changes', async () => {
    const user = userEvent.setup()
    render(<ServicesAndTestimonials />)
    const tabs = screen.getAllByRole('tab')
    await user.click(tabs[1]!)
    const avatar = screen.getByRole('img', { name: 'Maria Garcia' })
    expect(avatar).toHaveAttribute('src', 'https://picsum.photos/seed/nectar-testimonial-2/60/60')
  })

  it('renders decorative brand dividers', () => {
    const { container } = render(<ServicesAndTestimonials />)
    const dividers = container.querySelectorAll('[aria-hidden="true"]')
    expect(dividers.length).toBeGreaterThanOrEqual(1)
  })
})
