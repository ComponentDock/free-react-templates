import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('renders the heading and description', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('heading', { level: 2, name: /We Believe/i })).toBeInTheDocument()
    expect(screen.getByText(/Inappropriate handling/i)).toBeInTheDocument()
  })

  it('renders the play button and CTA', () => {
    render(<AboutVideo />)
    expect(screen.getByRole('button', { name: /Play video/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /See Details/i })).toBeInTheDocument()
  })
})
