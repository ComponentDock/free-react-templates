import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the section title and the first testimonial slide', () => {
    const { container } = render(<Testimonials />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Client say about me/)

    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Elite Martin')
    expect(screen.getByText(/Him, made can't called over/)).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('quad-client-1'),
    )
  })

  it('advances to the next testimonial slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Davil Saden')
    expect(screen.getByText(/Saw from may creeping/)).toBeInTheDocument()
  })

  it('wraps back to the last slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))

    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe('Davil Saden')
    expect(screen.getByText(/Creeping gathered divide our let god moving/)).toBeInTheDocument()
  })
})
