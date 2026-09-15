import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What People Say')
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mike Fisher')).toBeInTheDocument()
    expect(screen.getByText(/Working with this charity/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Jorge Smith')).toBeInTheDocument()
  })

  it('navigates to previous testimonial (wraps from first to last)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // At index 0, clicking Previous should wrap to last (index 2)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Brandon White')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Brandon White')).toBeInTheDocument()
  })

  it('wraps next from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to last (index 2)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Brandon White')).toBeInTheDocument()
    // Click next - should wrap to first (index 0)
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('Mike Fisher')).toBeInTheDocument()
  })

  it('navigates previous from middle (non-wrap)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    // Go to middle (index 1)
    await user.click(screen.getByLabelText('Go to testimonial 2'))
    expect(screen.getByText('Jorge Smith')).toBeInTheDocument()
    // Click previous - should go to index 0 (no wrap)
    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('Mike Fisher')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Previous testimonial')).toBeInTheDocument()
    expect(screen.getByLabelText('Next testimonial')).toBeInTheDocument()
  })
})
