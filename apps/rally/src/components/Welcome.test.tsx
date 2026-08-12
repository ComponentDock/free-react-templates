import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the welcome photo, heading, paragraphs and details link', () => {
    const { container } = render(<Welcome />)

    expect(screen.getByRole('heading', { level: 2, name: 'Welcome to Rally' })).toBeInTheDocument()
    expect(screen.getByText(/inappropriate behavior is often laughed off/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View More Details' })).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/id/1055'),
    )
  })
})
