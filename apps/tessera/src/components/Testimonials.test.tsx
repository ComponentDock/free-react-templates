import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading, a quote, the author, and a role', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our satisfied customer says/ }),
    ).toBeInTheDocument()
    const figure = screen.getByRole('figure')
    expect(within(figure).getByText(/Far far away/)).toBeInTheDocument()
    expect(within(figure).getByText('Garreth Smith')).toBeInTheDocument()
    expect(within(figure).getByText(/CEO/)).toBeInTheDocument()
  })

  it('advances to the next testimonial with the next button', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const figure = screen.getByRole('figure')
    const first = within(figure).getByText(/Far far away|Duden|Little Blind Text/).textContent
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    const second = within(screen.getByRole('figure')).getByText(
      /Far far away|Duden|Little Blind Text/,
    ).textContent
    expect(second).not.toBe(first)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(
      within(screen.getByRole('figure')).getByText(/Far far away|Duden|Little Blind Text/)
        .textContent,
    ).toBe(first)
  })
})
