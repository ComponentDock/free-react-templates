import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, paragraph and illustration', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Take the first step/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Join thousands of curious minds/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Two students learning together' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/corona-hero'),
    )
  })

  it('renders the white wave separator', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('svg path')).toHaveAttribute('fill', '#ffffff')
  })
})
