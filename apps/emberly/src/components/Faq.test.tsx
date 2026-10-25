import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { FAQ } from '../content'

describe('Faq', () => {
  it('renders five closed question rows', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    for (const item of FAQ.items) {
      const trigger = screen.getByRole('button', { name: item.question })
      expect(trigger).toHaveAttribute('aria-controls', `faq-panel-${FAQ.items.indexOf(item)}`)
      expect(screen.getByText(item.answer)).toBeInTheDocument()
    }
  })

  it('opens one row and closes it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQ.items[0]!.question })

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const panel = document.getElementById('faq-panel-0')!
    expect(panel.style.maxHeight).toBe('24rem')
    expect(panel.style.opacity).toBe('1')
    expect(first.querySelector('span[aria-hidden="true"]')).toHaveClass('rotate-45')

    await user.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-0')!.style.maxHeight).toBe('0px')
    expect(document.getElementById('faq-panel-0')!.style.opacity).toBe('0')
  })

  it('is exclusive: opening another row collapses the first', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQ.items[0]!.question })
    const second = screen.getByRole('button', { name: FAQ.items[1]!.question })

    await user.click(first)
    await user.click(second)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('faq-panel-0')!.style.maxHeight).toBe('0px')
    expect(document.getElementById('faq-panel-1')!.style.maxHeight).toBe('24rem')
  })

  it('toggles from the keyboard', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const third = screen.getByRole('button', { name: FAQ.items[2]!.question })

    third.focus()
    await user.keyboard('{Enter}')
    expect(third).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard(' ')
    expect(third).toHaveAttribute('aria-expanded', 'false')
  })

  it('points every panel back at its own question', () => {
    render(<Faq />)
    for (let index = 0; index < FAQ.items.length; index += 1) {
      const panel = document.getElementById(`faq-panel-${index}`)!
      expect(panel).toHaveAttribute('role', 'region')
      expect(panel).toHaveAttribute('aria-labelledby', `faq-question-${index}`)
    }
  })
})
