import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CoreFeatureCarousel } from './CoreFeatureCarousel'

describe('CoreFeatureCarousel', () => {
  it('renders the section heading', () => {
    render(<CoreFeatureCarousel />)
    expect(screen.getByRole('region', { name: /core feature carousel/i })).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<CoreFeatureCarousel />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders carousel navigation buttons', () => {
    render(<CoreFeatureCarousel />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('navigates to next slide on click', async () => {
    const user = userEvent.setup()
    render(<CoreFeatureCarousel />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    expect(screen.getByRole('img', { name: /core feature two/i })).toBeInTheDocument()
  })

  it('navigates to previous slide from a middle position', async () => {
    const user = userEvent.setup()
    render(<CoreFeatureCarousel />)
    // Move forward to index 1, then go back to index 0
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    await user.click(nextBtn)
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(screen.getByRole('img', { name: /core feature one/i })).toBeInTheDocument()
  })

  it('wraps from first to last on previous click', async () => {
    const user = userEvent.setup()
    render(<CoreFeatureCarousel />)
    // Initially at slide 0, click prev should wrap to slide 2
    const prevBtn = screen.getByRole('button', { name: /previous slide/i })
    await user.click(prevBtn)
    expect(screen.getByRole('img', { name: /core feature three/i })).toBeInTheDocument()
  })

  it('wraps from last to first on next click', async () => {
    const user = userEvent.setup()
    render(<CoreFeatureCarousel />)
    const nextBtn = screen.getByRole('button', { name: /next slide/i })
    // Navigate to last slide (index 2)
    await user.click(nextBtn)
    await user.click(nextBtn)
    // Now at last slide, next should wrap to first
    await user.click(nextBtn)
    expect(screen.getByRole('img', { name: /core feature one/i })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<CoreFeatureCarousel className="custom-class" />)
    expect(screen.getByRole('region', { name: /core feature carousel/i })).toHaveClass(
      'custom-class',
    )
  })
})
