import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders the wordmark with a brand dot', () => {
    const { container } = render(<Logo />)

    expect(screen.getByText(/^debut$/)).toBeInTheDocument()
    expect(container.querySelector('span')).toHaveClass('text-brand')
    expect(container.querySelector('span')).toHaveTextContent('.')
  })

  it('merges a className override', () => {
    const { container } = render(<Logo className="w-full" />)
    expect(container.firstElementChild).toHaveClass('w-full')
  })
})
