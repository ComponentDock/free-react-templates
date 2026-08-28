import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/20\+ years/)).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    const paras = screen.getAllByText(/The automated process/)
    expect(paras.length).toBe(2)
  })

  it('renders the More About Us button', () => {
    render(<About />)
    expect(screen.getByText('More About Us')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    const img = screen.getByAltText('Agricultural field with crops')
    expect(img).toBeInTheDocument()
  })
})
