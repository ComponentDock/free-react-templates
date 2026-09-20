import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('renders the heading', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Education is the foundation/i,
    )
  })

  it('renders the description', () => {
    render(<AboutVideo />)
    expect(screen.getByText(/At Laurel, we believe/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutVideo />)
    const img = screen.getByRole('img', { name: /about laurel/i })
    expect(img).toBeInTheDocument()
  })
})
