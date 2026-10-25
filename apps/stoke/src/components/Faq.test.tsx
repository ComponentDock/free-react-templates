import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Faq } from './Faq'
import { FAQS } from '../content'

describe('Faq', () => {
  it('renders five closed questions', () => {
    render(<Faq />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(FAQS.length)
    for (const button of buttons) {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    }
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })

  it('opens a question and exposes its panel through aria-controls', () => {
    render(<Faq />)
    const button = screen.getByRole('button', { name: /What does after hours cost/ })
    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    const panelId = button.getAttribute('aria-controls') ?? ''
    const panel = document.getElementById(panelId)
    expect(panel).not.toBeNull()
    expect(within(panel as HTMLElement).getByText(FAQS[1]!.answer)).toBeInTheDocument()
    expect(button.querySelector('span[aria-hidden="true"]')).toHaveClass('rotate-45')
  })

  it('keeps exactly one question open', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: /What counts as an emergency/ })
    const second = screen.getByRole('button', { name: /What does after hours cost/ })

    fireEvent.click(first)
    expect(screen.getByText(FAQS[0]!.answer)).toBeInTheDocument()

    fireEvent.click(second)
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
    expect(screen.getByText(FAQS[1]!.answer)).toBeInTheDocument()
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the open question when it is activated again', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: /What counts as an emergency/ })
    fireEvent.click(first)
    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })

  it('introduces the band with the pill and the heading', () => {
    render(<Faq />)
    expect(screen.getByText('Questions')).toHaveClass('bg-primary-100')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Before you call at 3am' }),
    ).toBeInTheDocument()
  })
})
