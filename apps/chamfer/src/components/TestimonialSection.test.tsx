import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestimonialSection } from './TestimonialSection'

describe('TestimonialSection', () => {
  it('renders the first testimonial quote and name', () => {
    render(<TestimonialSection />)
    expect(screen.getByText(/Chamfer transformed our office/)).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })

  it('navigates to the next testimonial on arrow click', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText(/Working with the Chamfer team/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial on arrow click', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(screen.getByText(/Chamfer transformed our office/)).toBeInTheDocument()
  })

  it('has dot navigation for each testimonial', () => {
    render(<TestimonialSection />)
    expect(screen.getByRole('button', { name: /Go to testimonial 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Go to testimonial 2/i })).toBeInTheDocument()
  })

  it('navigates to a specific testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<TestimonialSection />)
    // Click the second dot
    await user.click(screen.getByRole('button', { name: /Go to testimonial 2/i }))
    expect(screen.getByText(/Working with the Chamfer team/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })
})
