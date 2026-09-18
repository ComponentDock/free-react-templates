import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
    expect(screen.getByText(/Absolutely fantastic work/)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText(/Professional, creative/)).toBeInTheDocument()
  })

  it('navigates to the previous testimonial from middle', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to index 1 first
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    // Now go back — hits the i - 1 branch
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)
    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
  })

  it('wraps around to last when pressing prev at first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)
    expect(screen.getByText('James Porter')).toBeInTheDocument()
  })

  it('wraps around to first when pressing next at last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)
    expect(screen.getByText('James Porter')).toBeInTheDocument()
    // Go next from last — should wrap to first
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)
    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
  })

  it('renders person images', () => {
    render(<Testimonials />)
    const img = screen.getByAltText('Carl Anderson')
    expect(img).toBeInTheDocument()
  })
})
