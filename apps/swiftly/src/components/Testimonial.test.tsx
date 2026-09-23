import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders initial testimonial author', () => {
    render(<Testimonial />)
    expect(screen.getByText('Kaila Woodland')).toBeInTheDocument()
    expect(screen.getByText('Owner, Greenland, Inc.')).toBeInTheDocument()
  })

  it('renders testimonial quote', () => {
    render(<Testimonial />)
    expect(
      screen.getByText(/there live the blind texts\. Separated they live\./i),
    ).toBeInTheDocument()
  })

  it('renders Join Now CTA', () => {
    render(<Testimonial />)
    expect(screen.getByText('Join Now')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /product tour/i })).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)

    expect(screen.getByText('James Carter')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechFlow')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    // Go to index 1 first
    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn)

    // Now go back to index 0
    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)

    expect(screen.getByText('Kaila Woodland')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const nextBtn = screen.getByRole('button', { name: /next testimonial/i })
    await user.click(nextBtn) // index 1
    await user.click(nextBtn) // index 2

    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()

    // Click next again should wrap to first
    await user.click(nextBtn)
    expect(screen.getByText('Kaila Woodland')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const prevBtn = screen.getByRole('button', { name: /previous testimonial/i })
    await user.click(prevBtn)

    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })
})
