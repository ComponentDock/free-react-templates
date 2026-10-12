import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the leaf mark and the Ecohive wordmark', () => {
    render(<Wordmark />)
    expect(screen.getByText('Ecohive')).toBeInTheDocument()
    expect(screen.getByText('Ecohive').tagName).toBe('SPAN')
  })

  it('merges a caller class onto the wrapper', () => {
    const { container } = render(<Wordmark className="text-lg" />)
    expect(container.firstElementChild).toHaveClass('text-lg')
  })
})
