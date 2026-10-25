import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the brand on a dark ground by default', () => {
    render(<Wordmark />)

    expect(screen.getByText('Chalkline')).toHaveClass('text-gray-900')
  })

  it('renders white on the footer ground', () => {
    render(<Wordmark tone="light" />)

    expect(screen.getByText('Chalkline')).toHaveClass('text-white')
  })
})
