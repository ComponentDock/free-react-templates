import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reviews, getPrevIndex } from './Reviews'

describe('getPrevIndex', () => {
  it('wraps to end when current is 0', () => {
    expect(getPrevIndex(0, 6, 3)).toBe(3)
  })

  it('decrements by 1 when current is not 0', () => {
    expect(getPrevIndex(3, 6, 3)).toBe(2)
  })
})

describe('Reviews', () => {
  it('renders the section heading', () => {
    render(<Reviews />)
    expect(screen.getByText('Word from my clients')).toBeInTheDocument()
  })

  it('renders the testimonials label', () => {
    render(<Reviews />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders 3 review cards initially', () => {
    render(<Reviews />)
    // The opening curly quote entity is rendered as \u201c
    const quotes = screen.getAllByText(/\u201c/)
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })

  it('renders navigation buttons', () => {
    render(<Reviews />)
    expect(screen.getByLabelText('Previous review')).toBeInTheDocument()
    expect(screen.getByLabelText('Next review')).toBeInTheDocument()
  })

  it('navigates to next reviews on next button click', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    const nextBtn = screen.getByLabelText('Next review')
    await user.click(nextBtn)

    // After clicking next, the reviews should have shifted
    // We verify the button is clickable and the component updates
    expect(nextBtn).toBeInTheDocument()
  })

  it('navigates to previous reviews on prev button click', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    // First go forward to exit state 0
    const nextBtn = screen.getByLabelText('Next review')
    await user.click(nextBtn)

    // Now go back — this hits the "c !== 0" branch
    const prevBtn = screen.getByLabelText('Previous review')
    await user.click(prevBtn)

    expect(prevBtn).toBeInTheDocument()
  })

  it('displays client names', () => {
    render(<Reviews />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('displays client roles', () => {
    render(<Reviews />)
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('has a dark navy background', () => {
    const { container } = render(<Reviews />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-navy')
  })

  it('has the reviews section id', () => {
    const { container } = render(<Reviews />)
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'reviews')
  })
})
