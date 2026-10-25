import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { FAQS } from '../data'

describe('Faq', () => {
  it('renders the five questions collapsed, in the reference order', () => {
    render(<Faq />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    expect(buttons.map((button) => button.textContent)).toEqual(FAQS.map((faq) => faq.question))
    buttons.forEach((button, index) => {
      expect(button).toHaveAttribute('aria-expanded', 'false')
      expect(button).toHaveAttribute('aria-controls', `faq-panel-${index}`)
    })
    expect(screen.queryByRole('region')).toBeNull()
  })

  it('opens the pressed row, rotates its disc and shows the answer', async () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })

    await userEvent.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: FAQS[0]!.question })).toHaveTextContent(
      FAQS[0]!.answer,
    )
    expect(within(first).getByTestId('faq-icon')).toHaveClass('rotate-45')
  })

  it('keeps exactly one answer open at a time', async () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })
    const second = screen.getByRole('button', { name: FAQS[1]!.question })

    await userEvent.click(first)
    await userEvent.click(second)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(within(first).getByTestId('faq-icon')).toHaveClass('rotate-0')
    expect(screen.getAllByRole('region')).toHaveLength(1)
    expect(screen.getByRole('region', { name: FAQS[1]!.question })).toBeInTheDocument()
  })

  it('closes the open row when it is pressed again', async () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })

    await userEvent.click(first)
    await userEvent.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region')).toBeNull()
  })
})
