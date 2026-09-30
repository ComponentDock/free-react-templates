import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagePanel } from './ImagePanel'

describe('ImagePanel', () => {
  it('renders the welcome heading', () => {
    render(<ImagePanel />)
    expect(screen.getByRole('heading', { name: /welcome to signup form/i })).toBeInTheDocument()
  })

  it('renders the descriptive paragraph', () => {
    render(<ImagePanel />)
    expect(screen.getByText(/signup with social networks/i)).toBeInTheDocument()
  })

  it('renders a background image container', () => {
    render(<ImagePanel />)
    const panel = screen.getByTestId('image-panel')
    expect(panel).toHaveClass('relative')
  })

  it('applies purple overlay via pseudo-element', () => {
    render(<ImagePanel />)
    const panel = screen.getByTestId('image-panel')
    expect(panel.querySelector('[data-overlay]')).toBeInTheDocument()
  })
})
