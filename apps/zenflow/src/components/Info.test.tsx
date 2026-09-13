import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Info } from './Info'

describe('Info', () => {
  it('renders the info heading', () => {
    render(<Info />)
    expect(screen.getByText('We Build Digital Products')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Info />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<Info />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the info image', () => {
    render(<Info />)
    const img = screen.getByAltText('About Zenflow')
    expect(img).toBeInTheDocument()
  })
})
