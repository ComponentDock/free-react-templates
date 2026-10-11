import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the Harbor wordmark with its own logo mark', () => {
    const { container } = render(<Wordmark />)
    expect(screen.getByText('Harbor')).toBeInTheDocument()
    const mark = container.querySelector('svg')
    expect(mark).not.toBeNull()
    expect(mark).toHaveAttribute('aria-hidden', 'true')
  })

  it('merges a caller supplied class name', () => {
    const { container } = render(<Wordmark className="text-xl" />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('text-xl')
    expect(wrapper.className).toContain('inline-flex')
  })
})
