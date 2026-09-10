import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Client/i })).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jabin Kane')).toBeInTheDocument()
    expect(screen.getByText('CEO, TopSmmPanel.com')).toBeInTheDocument()
  })

  it('navigates forward through all testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const nextBtn = screen.getByRole('button', { name: 'Next testimonial' })

    // 0 → 1
    await user.click(nextBtn)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()

    // 1 → 2
    await user.click(nextBtn)
    expect(screen.getByText('David Chen')).toBeInTheDocument()

    // 2 → 0 (wrap)
    await user.click(nextBtn)
    expect(screen.getByText('Jabin Kane')).toBeInTheDocument()
  })

  it('navigates backward through all testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const prevBtn = screen.getByRole('button', { name: 'Previous testimonial' })

    // 0 → 2 (wrap)
    await user.click(prevBtn)
    expect(screen.getByText('David Chen')).toBeInTheDocument()

    // 2 → 1
    await user.click(prevBtn)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()

    // 1 → 0
    await user.click(prevBtn)
    expect(screen.getByText('Jabin Kane')).toBeInTheDocument()
  })

  it('allows clicking on photo dots to select a testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /View testimonial from/i })
    expect(dots).toHaveLength(3)

    const thirdDot = dots[2]!
    await user.click(thirdDot)
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })
})
