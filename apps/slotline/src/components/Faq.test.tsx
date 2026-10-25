import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { faq } from '../content'

describe('Faq', () => {
  it('renders six closed rows with the accessibility attributes the reference omits', () => {
    render(<Faq />)
    for (const [index, item] of faq.items.entries()) {
      const trigger = screen.getByRole('button', { name: item.question })
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveAttribute('aria-controls', `faq-panel-${index}`)
      expect(document.getElementById(`faq-panel-${index}`)).toBeInTheDocument()
    }
  })

  it('opens one row, closes it again and stays exclusive', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const first = screen.getByRole('button', { name: faq.items[0].question })
    const second = screen.getByRole('button', { name: faq.items[1].question })

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('faq-panel-0')?.className).toContain('grid-rows-[1fr]')
    expect(first.querySelector('span[aria-hidden="true"]')?.className).toContain('rotate-45')
    expect(screen.getByText(faq.items[0].answer)).toBeInTheDocument()

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-0')?.className).toContain('grid-rows-[0fr]')

    await user.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
  })
})
