import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { faq } from '../content'

describe('Faq', () => {
  it('lists five questions, all closed at load', () => {
    render(<Faq />)

    const toggles = screen.getAllByRole('button')
    expect(toggles).toHaveLength(faq.items.length)

    toggles.forEach((toggle, index) => {
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
      expect(toggle).toHaveAttribute('aria-controls', `faq-panel-${index}`)
      expect(screen.getByText(faq.items[index]!.question)).toHaveClass('text-lg', 'font-semibold')
    })

    const panel = screen.getByRole('region', { name: faq.items[0]!.question })
    expect(panel).toHaveClass('max-h-0', 'opacity-0')
    expect(panel).toHaveTextContent(faq.items[0]!.answer)
  })

  it('opens one panel at a time and closes the open one on a second click', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    const [first, second] = screen.getAllByRole('button')
    const firstPanel = screen.getByRole('region', { name: faq.items[0]!.question })
    const secondPanel = screen.getByRole('region', { name: faq.items[1]!.question })

    await user.click(first!)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(firstPanel).toHaveClass('max-h-96', 'opacity-100')
    expect(first!.querySelectorAll('span')[1]).toHaveClass('rotate-45')

    await user.click(second!)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(firstPanel).toHaveClass('max-h-0')
    expect(secondPanel).toHaveClass('max-h-96')

    await user.click(second!)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(secondPanel).toHaveClass('max-h-0', 'opacity-0')
  })
})
