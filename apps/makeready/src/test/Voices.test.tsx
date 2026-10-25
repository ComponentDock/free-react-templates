import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { Testimonials } from '../components/Testimonials'
import { faq, testimonials } from '../content'

describe('Testimonials', () => {
  it('shows three unequal quotes about handover, with five grey stars each', () => {
    render(<Testimonials />)

    expect(screen.getByText('Clients')).toHaveClass('rounded-full')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Mostly about the handover' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('figure')
    expect(cards).toHaveLength(3)

    for (const [index, card] of testimonials.items.entries()) {
      const figure = cards[index]!
      expect(within(figure).getByText(`“${card.quote}”`)).toBeInTheDocument()
      expect(within(figure).getByText(card.initial)).toBeInTheDocument()
      expect(within(figure).getByText(card.name)).toBeInTheDocument()
      expect(within(figure).getByText(card.role)).toBeInTheDocument()
      expect(within(figure).getByLabelText('Five out of five')).toBeInTheDocument()
    }
  })

  it('moves the track below lg, wraps at both ends and jumps on a dot', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const track = screen.getByTestId('testimonial-track')
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    await user.click(screen.getByRole('button', { name: testimonials.next }))
    expect(track).toHaveStyle({ transform: 'translateX(-100%)' })
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: testimonials.previous }))
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    await user.click(screen.getByRole('button', { name: testimonials.previous }))
    expect(track).toHaveStyle({ transform: 'translateX(-200%)' })

    await user.click(screen.getByRole('button', { name: 'Show testimonial 1' }))
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})

describe('Faq', () => {
  it('opens the first question, names every panel and keeps one open at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)

    const first = screen.getByRole('button', { name: faq.items[0]!.question })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-controls', 'faq-panel-0')
    expect(screen.getByText(faq.items[0]!.answer)).toBeVisible()

    const second = screen.getByRole('button', { name: faq.items[1]!.question })
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(faq.items[1]!.answer)).not.toBeVisible()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(faq.items[1]!.answer)).toBeVisible()
    expect(screen.getByText(faq.items[0]!.answer)).not.toBeVisible()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(faq.items[1]!.answer)).not.toBeVisible()
  })

  it('states the count it actually lists', () => {
    render(<Faq />)
    expect(faq.items).toHaveLength(5)
    expect(
      screen.getByText('The five things worth settling before a project starts.'),
    ).toBeInTheDocument()
  })
})
