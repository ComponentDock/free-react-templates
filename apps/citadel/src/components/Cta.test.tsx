import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading', () => {
    render(<Cta />)
    expect(screen.getByText(/Let/i)).toBeInTheDocument()
    expect(screen.getByText(/talk about your/i)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Cta />)
    expect(screen.getByText(/Our team of experienced engineers/i)).toBeInTheDocument()
  })

  it('renders the Discuss now button', () => {
    render(<Cta />)
    expect(screen.getByText('Discuss now')).toBeInTheDocument()
  })
})
