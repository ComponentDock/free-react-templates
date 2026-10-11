import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders the title and the four gradient-text stat counters', () => {
    render(<Faq />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Frequently Asked Questions',
    )
    for (const [value, label] of [
      ['5962', 'Projects Completed'],
      ['2394', 'New Projects'],
      ['1439', 'Tickets Submitted'],
      ['933', 'Cup of Coffee'],
    ] as const) {
      expect(screen.getByText(value)).toHaveClass('counter-text')
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('toggles accordion answers with stateful open/close', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: 'Are your Templates responsive?' })
    const second = screen.getByRole('button', { name: 'Does it have all the plugin as mentioned?' })
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Every layout is built mobile-first/)).toBeInTheDocument()
    fireEvent.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Sliders, accordions, and popovers ship/)).toBeInTheDocument()
    expect(screen.queryByText(/Every layout is built mobile-first/)).not.toBeInTheDocument()
    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/Sliders, accordions, and popovers ship/)).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Can i use the these theme for my client?' }),
    ).toBeInTheDocument()
  })
})
