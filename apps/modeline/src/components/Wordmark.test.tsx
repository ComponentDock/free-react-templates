import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders a tracked crest wordmark on the navy bar', () => {
    render(<Wordmark />)

    const wordmark = screen.getByText('Modeline')
    expect(wordmark).toHaveClass('tracking-[0.35em]', 'uppercase')
    expect(wordmark.parentElement).toHaveClass('text-white')
  })

  it('flips to ink on the white footer', () => {
    render(<Wordmark tone="dark" />)

    expect(screen.getByText('Modeline').parentElement).toHaveClass('text-ink')
  })
})
