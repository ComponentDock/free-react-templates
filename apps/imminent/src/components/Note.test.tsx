import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Note } from './Note'

describe('Note', () => {
  it('renders the small pale-grey spam note just above the credit', () => {
    render(<Note />)

    const note = screen.getByText(/we hate spam too/)

    expect(note.tagName).toBe('P')
    expect(note).toHaveTextContent(
      'And don\u2019t worry, we hate spam too! You can unsubscribe at anytime.',
    )
    expect(note).toHaveClass(
      'pt-[5px]',
      'text-center',
      'font-sans',
      'text-[12px]',
      'leading-[1.333333]',
      'text-note',
    )
  })

  it('accepts a className override', () => {
    const { container } = render(<Note className="pt-0" />)

    expect(container.firstElementChild).toHaveClass('pt-0')
  })
})
