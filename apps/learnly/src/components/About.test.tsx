import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('About Our University')).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Learnly University is dedicated/)).toBeInTheDocument()
    expect(screen.getByText(/Founded by educators/)).toBeInTheDocument()
  })

  it('renders Read more link', () => {
    render(<About />)
    expect(screen.getByText('Read more')).toBeInTheDocument()
  })
})
