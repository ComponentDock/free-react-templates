import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FAQ } from '../content'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders five questions with the first one open', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
    FAQ.items.forEach((item, index) => {
      expect(buttons[index]).toHaveTextContent(item.question)
      expect(buttons[index]).toHaveAttribute('aria-controls', `faq-answer-${index}`)
    })
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(FAQ.items[0].answer)).toBeInTheDocument()
    expect(screen.getByText(FAQ.items[1].answer)).not.toBeVisible()
  })

  it('opens one answer at a time and closes the previous one', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')

    fireEvent.click(buttons[2]!)
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(FAQ.items[2].answer)).toBeVisible()
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(FAQ.items[0].answer)).not.toBeVisible()

    fireEvent.click(buttons[4]!)
    expect(buttons[4]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes an open answer when it is activated again', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0]!)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(FAQ.items[0].answer)).not.toBeVisible()
  })

  it('rotates the plus and hides collapsed panels from assistive technology', () => {
    const { container } = render(<Faq />)
    const icons = container.querySelectorAll('button svg')
    expect(icons[0]?.getAttribute('class')).toContain('rotate-45')
    expect(icons[1]?.getAttribute('class')).not.toContain('rotate-45')
    expect(document.getElementById('faq-answer-1')).toHaveAttribute('hidden')
    expect(document.getElementById('faq-answer-0')).not.toHaveAttribute('hidden')
  })

  it('carries the pill, heading and lede', () => {
    render(<Faq />)
    expect(screen.getByText(FAQ.pill)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: FAQ.heading })).toBeInTheDocument()
    expect(screen.getByText(FAQ.lede)).toBeInTheDocument()
  })
})
