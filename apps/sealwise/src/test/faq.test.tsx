import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { faq } from '../content'

describe('questions', () => {
  it('renders five closed rows with a working aria pair', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(faq.items.length)
    for (const [index, item] of faq.items.entries()) {
      const button = screen.getByRole('button', { name: item.question })
      expect(button).toHaveAttribute('aria-expanded', 'false')
      const panelId = button.getAttribute('aria-controls')
      expect(panelId).toBe(`faq-panel-${index}`)
      expect(document.getElementById(panelId as string)).toHaveTextContent(item.answer)
    }
  })

  it('opens one answer, closes it, and closes the previous row when another opens', async () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: faq.items[0].question })
    await userEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first.querySelector('[data-faq-icon]')).toHaveClass('rotate-45')

    await userEvent.click(screen.getByRole('button', { name: faq.items[1].question }))
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: faq.items[1].question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: faq.items[1].question }))
    expect(screen.getByRole('button', { name: faq.items[1].question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
