import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the interior photo with a play icon and the welcome heading pair', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('img', { name: 'Inside the Hearth restaurant' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Welcome to Hearth Restaurant',
    )
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })

  it('renders two paragraphs of copy', () => {
    render(<About />)

    expect(screen.getByText(/On her way she met a copy/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden flows/)).toBeInTheDocument()
  })
})
