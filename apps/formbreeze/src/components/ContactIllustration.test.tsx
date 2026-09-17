import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactIllustration } from './ContactIllustration'

describe('ContactIllustration', () => {
  it('renders the illustration text', () => {
    render(<ContactIllustration />)
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument()
  })

  it('renders the message circle icon', () => {
    const { container } = render(<ContactIllustration />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
