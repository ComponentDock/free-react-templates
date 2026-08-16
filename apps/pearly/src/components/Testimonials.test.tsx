import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders quote cards for three distinct patients', () => {
    render(<Testimonials />)
    // aria-hidden slides are excluded from role queries by default — ask
    // for them explicitly (hidden: true).
    const cards = screen.getAllByRole('figure', { hidden: true })
    expect(cards).toHaveLength(3)
    const names = ['Maria Gomez', 'David Chen', 'Aisha Khan']
    for (const name of names) {
      // figcaption text is split ("- " + name) into two text nodes —
      // getNodeText concatenates them, so match with a regex.
      expect(screen.getByText(new RegExp(name))).toBeInTheDocument()
    }
  })

  it('borders each card with the dark navy color', () => {
    render(<Testimonials />)
    const cards = screen.getAllByRole('figure', { hidden: true })
    // Only the active slide carries the border classes.
    const active = cards.filter((c) => c.getAttribute('aria-hidden') !== 'true')
    expect(active).toHaveLength(1)
    expect(active[0]?.className).toContain('border-navy')
  })

  it('shows one quote card at a time and advances with the arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const visible = () =>
      screen
        .getAllByRole('figure', { hidden: true })
        .filter((f) => f.getAttribute('aria-hidden') !== 'true')

    expect(visible()).toHaveLength(1)
    const firstQuote = visible()[0]?.textContent

    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(visible()).toHaveLength(1)
    expect(visible()[0]?.textContent).not.toBe(firstQuote)

    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    expect(visible()[0]?.textContent).toBe(firstQuote)
  })

  it('wraps around after the last slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    await user.click(screen.getByRole('button', { name: /Next testimonial/i }))
    const visible = screen
      .getAllByRole('figure', { hidden: true })
      .filter((f) => f.getAttribute('aria-hidden') !== 'true')
    expect(within(visible[0] as HTMLElement).getByText(/Maria Gomez/)).toBeInTheDocument()
  })

  it('wraps backwards from the first slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    const visible = screen
      .getAllByRole('figure', { hidden: true })
      .filter((f) => f.getAttribute('aria-hidden') !== 'true')
    expect(within(visible[0] as HTMLElement).getByText(/Aisha Khan/)).toBeInTheDocument()
  })
})
