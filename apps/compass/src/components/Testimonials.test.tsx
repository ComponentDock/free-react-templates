import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

const visibleSlide = () =>
  screen
    .getAllByTestId('testimonial-slide')
    .find((element) => element.getAttribute('aria-hidden') === 'false')!

describe('Testimonials', () => {
  it('renders the title and four slides with the first one visible', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()

    const slides = screen.getAllByTestId('testimonial-slide')
    expect(slides).toHaveLength(4)
    expect(slides[0]!).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]!).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows the visible slide quote and author', () => {
    render(<Testimonials />)
    const slide = visibleSlide()
    expect(within(slide).getByText(testimonials.items[0]!.quote)).toBeInTheDocument()
    expect(within(slide).getByText(testimonials.items[0]!.author)).toBeInTheDocument()
  })

  it('navigates with the carousel dots and highlights the active dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(4)
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')

    await user.click(dots[2]!)
    const slides = screen.getAllByTestId('testimonial-slide')
    expect(slides[2]!).toHaveAttribute('aria-hidden', 'false')
    expect(dots[2]!).toHaveAttribute('aria-current', 'true')
    expect(dots[0]!).not.toHaveAttribute('aria-current')

    const slide = visibleSlide()
    expect(within(slide).getByText(testimonials.items[2]!.author)).toBeInTheDocument()
    expect(within(slide).queryByText(testimonials.items[0]!.author)).not.toBeInTheDocument()
  })
})
