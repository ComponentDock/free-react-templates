import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonialsFaq } from './TestimonialsFaq'

describe('TestimonialsFaq', () => {
  it('renders testimonials heading', () => {
    render(<TestimonialsFaq />)
    expect(screen.getByText(/Happy/)).toBeDefined()
    expect(screen.getByText(/Clients Says/)).toBeDefined()
  })

  it('renders FAQ heading', () => {
    render(<TestimonialsFaq />)
    expect(screen.getByText(/Frequently/)).toBeDefined()
    expect(screen.getByText(/Ask Questions/)).toBeDefined()
  })

  it('renders testimonial names', () => {
    render(<TestimonialsFaq />)
    expect(screen.getByText('Sarah Mitchell')).toBeDefined()
    expect(screen.getByText('James Porter')).toBeDefined()
  })

  it('renders first FAQ item expanded by default', () => {
    render(<TestimonialsFaq />)
    expect(screen.getByText(/comprehensive legal support/)).toBeDefined()
  })

  it('toggles FAQ items on click', async () => {
    const user = userEvent.setup()
    render(<TestimonialsFaq />)
    const secondFaq = screen.getByText('The latest updates in legislation')
    await user.click(secondFaq)
    expect(screen.getByText(/stay current with all legislative/)).toBeDefined()
  })

  it('collapses open FAQ when clicking the same item', async () => {
    const user = userEvent.setup()
    render(<TestimonialsFaq />)
    const firstFaq = screen.getByText('Law assistance for my business')
    await user.click(firstFaq)
    expect(screen.queryByText(/comprehensive legal support/)).toBeNull()
  })
})
