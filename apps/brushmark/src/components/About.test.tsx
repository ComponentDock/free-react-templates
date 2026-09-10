import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about label and heading', () => {
    render(<About />)
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Creative Art Director And Designer')).toBeInTheDocument()
  })

  it('renders the CV button', () => {
    render(<About />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<About />)
    expect(screen.getByAltText('About me portrait')).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/decade of experience/)).toBeInTheDocument()
  })
})
