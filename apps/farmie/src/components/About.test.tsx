import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, copy, image, and a Read More button', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: 'Let Us Tell You Our Story' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute(
      'href',
      '#farm-to-table',
    )

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/farmie-about/)
  })
})
