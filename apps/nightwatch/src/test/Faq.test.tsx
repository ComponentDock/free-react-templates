import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from '../components/Faq'
import { FAQ } from '../content'

describe('Faq', () => {
  it('keeps all six questions and their answers in the document', () => {
    render(<Faq />)

    expect(screen.getAllByTestId('faq-row')).toHaveLength(6)
    FAQ.items.forEach((item) => {
      expect(screen.getByText(item.question).tagName).toBe('SPAN')
      expect(screen.getByText(item.answer)).toBeInTheDocument()
    })
    expect(screen.getByText(FAQ.pill)).toHaveClass('bg-primary-100')
  })

  it('opens one answer at a time and closes it on a second click', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    const first = buttons[0] as HTMLElement
    const second = buttons[1] as HTMLElement

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(first).toHaveAttribute('aria-controls', 'faq-answer-0')

    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    const panel = document.querySelector('#faq-answer-0') as HTMLElement
    expect(panel).toHaveClass('max-h-96', 'opacity-100')
    expect(panel.querySelector('p')).toHaveClass('text-gray-600')

    fireEvent.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('#faq-answer-1')).toHaveClass('max-h-0', 'opacity-0')
  })

  it('rotates the plus disc into a close mark while open', () => {
    render(<Faq />)
    const first = screen.getAllByRole('button')[0] as HTMLElement
    const disc = first.querySelector('span[aria-hidden="true"]') as HTMLElement

    expect(disc).toHaveClass('h-8', 'w-8', 'rounded-full', 'bg-gray-100')
    expect(disc).not.toHaveClass('rotate-45')

    fireEvent.click(first)
    expect(disc).toHaveClass('rotate-45')
    expect(disc.querySelector('svg')).toHaveClass('h-5', 'w-5')
  })
})
