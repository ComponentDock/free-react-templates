import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders the heading and three skill cards', () => {
    render(<Expertise />)
    expect(screen.getByRole('heading', { name: /my expertise/i })).toBeInTheDocument()
    for (const title of ['Frontend', 'Backend', 'Design']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a blurb for every skill', () => {
    render(<Expertise />)
    expect(screen.getByText(/React, TypeScript, and modern CSS/i)).toBeInTheDocument()
    expect(screen.getByText(/Node\.js, databases, and APIs/i)).toBeInTheDocument()
    expect(screen.getByText(/wireframes to design systems/i)).toBeInTheDocument()
  })
})
