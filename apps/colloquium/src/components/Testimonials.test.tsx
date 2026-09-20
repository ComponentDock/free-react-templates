import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and initial testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('What People Say')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Senior Developer at TechCorp')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('CTO at StartupHub')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last testimonial via dot
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    // Click next — should wrap to first
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('wraps around from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // On first testimonial, click prev — should wrap to last
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    // Click prev again to confirm we can keep going
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })
})
