import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServiceCarousel } from './ServiceCarousel'

describe('ServiceCarousel', () => {
  it('renders the section', () => {
    render(<ServiceCarousel />)
    expect(screen.getByRole('region', { name: /service carousel/i })).toBeInTheDocument()
  })

  it('renders the first service title', () => {
    render(<ServiceCarousel />)
    expect(screen.getByRole('heading', { name: 'Service One' })).toBeInTheDocument()
  })

  it('renders View Details link', () => {
    render(<ServiceCarousel />)
    expect(screen.getByRole('link', { name: /view details/i })).toBeInTheDocument()
  })

  it('navigates to next service on click', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    const nextBtn = screen.getByRole('button', { name: /next service/i })
    await user.click(nextBtn)
    expect(screen.getByRole('heading', { name: 'Service Two' })).toBeInTheDocument()
  })

  it('navigates to previous service from a middle position', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    // Move forward to index 1, then go back to index 0
    const nextBtn = screen.getByRole('button', { name: /next service/i })
    await user.click(nextBtn)
    const prevBtn = screen.getByRole('button', { name: /previous service/i })
    await user.click(prevBtn)
    expect(screen.getByRole('heading', { name: 'Service One' })).toBeInTheDocument()
  })

  it('wraps from first to last on previous click', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    // Initially at service 0, click prev should wrap to service 2
    const prevBtn = screen.getByRole('button', { name: /previous service/i })
    await user.click(prevBtn)
    expect(screen.getByRole('heading', { name: 'Service Three' })).toBeInTheDocument()
  })

  it('wraps from last to first on next click', async () => {
    const user = userEvent.setup()
    render(<ServiceCarousel />)
    const nextBtn = screen.getByRole('button', { name: /next service/i })
    // Navigate to last service (index 2)
    await user.click(nextBtn)
    await user.click(nextBtn)
    // Now at last service, next should wrap to first
    await user.click(nextBtn)
    expect(screen.getByRole('heading', { name: 'Service One' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<ServiceCarousel className="custom-class" />)
    expect(screen.getByRole('region', { name: /service carousel/i })).toHaveClass('custom-class')
  })
})
