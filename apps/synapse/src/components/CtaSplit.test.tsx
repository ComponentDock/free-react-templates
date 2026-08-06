import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaSplit } from './CtaSplit'

describe('CtaSplit', () => {
  it('renders the heading, blurb, and a Get Started Now button', () => {
    render(<CtaSplit />)

    expect(
      screen.getByRole('heading', { name: "We've made a life that will change you" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started Now' })).toBeInTheDocument()
  })

  it('renders an image preview', () => {
    render(<CtaSplit inverted />)

    expect(screen.getByRole('img', { name: 'Synapse product preview' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started Now' })).toBeInTheDocument()
  })
})
