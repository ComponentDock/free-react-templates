import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { faq } from '../content'

describe('Faq', () => {
  it('renders five divided questions in a 768 px column', () => {
    const { container } = render(<Faq />)

    expect(container.querySelector('#faq')).toHaveClass('bg-white')
    expect(container.querySelector('.divide-y')).toHaveClass('max-w-3xl')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(faq.title)

    faq.items.forEach((item) => {
      const trigger = screen.getByRole('button', { name: item.question })
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveAttribute('aria-controls', expect.stringMatching(/^faq-panel-/))
    })
  })

  it('opens one panel, rotates its disc and closes the previous one', () => {
    render(<Faq />)

    fireEvent.click(screen.getByRole('button', { name: faq.items[0]?.question as string }))
    const first = screen.getByRole('button', { name: faq.items[0]?.question as string })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('faq-panel-0')).toHaveClass('max-h-[32rem]', 'opacity-100')
    expect(document.getElementById('faq-panel-0')).toHaveTextContent(faq.items[0]?.answer as string)
    expect(first.querySelector('[data-faq-icon]')).toHaveClass('rotate-45')

    fireEvent.click(screen.getByRole('button', { name: faq.items[1]?.question as string }))
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-0')).toHaveClass('max-h-0', 'opacity-0')
    expect(first.querySelector('[data-faq-icon]')).not.toHaveClass('rotate-45')
    expect(
      screen.getByRole('button', { name: faq.items[1]?.question as string }),
    ).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes the open panel when it is activated again', () => {
    render(<Faq />)
    const trigger = screen.getByRole('button', { name: faq.items[2]?.question as string })

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('faq-panel-2')).toHaveAttribute('data-open', 'false')
  })
})
