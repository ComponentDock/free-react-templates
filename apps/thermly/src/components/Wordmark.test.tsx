import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Wordmark } from './Wordmark'

describe('Wordmark', () => {
  it('renders the split wordmark on the light ground by default', () => {
    const { container } = render(<Wordmark />)

    expect(container.textContent).toBe('Thermly')
    expect(container.querySelector('svg')).toHaveClass('text-primary-600')
  })

  it('renders the light tone for the near-black footer', () => {
    const { container } = render(<Wordmark tone="light" />)

    expect(container.querySelector('svg')).toHaveClass('text-primary-400')
    expect(container.textContent).toBe('Thermly')
  })
})
