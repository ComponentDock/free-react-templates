import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('About the Event')).toBeInTheDocument()
  })

  it('renders two columns of content', () => {
    render(<About />)
    expect(screen.getByText(/Gathr is the premier conference/)).toBeInTheDocument()
    expect(screen.getByText(/From keynotes that challenge/)).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<About />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })

  it('has proper heading level', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
