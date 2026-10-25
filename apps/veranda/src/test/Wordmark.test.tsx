import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from '../components/Wordmark'

describe('Wordmark', () => {
  it('draws the mark and the wordmark in ink by default', () => {
    render(<Wordmark />)

    const label = screen.getByText('Veranda')
    expect(label).toHaveClass('text-gray-900')
  })

  it('switches to white for the dark footer ground', () => {
    render(<Wordmark light className="extra" />)

    const label = screen.getByText('Veranda')
    expect(label).toHaveClass('text-white')
    expect(label.parentElement).toHaveClass('extra')
  })
})
