import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders founder name', () => {
    render(<About />)
    expect(screen.getByText(/jon campbell/i)).toBeInTheDocument()
  })

  it('renders bio paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/far far away/i)).toBeInTheDocument()
    expect(screen.getByText(/a small river/i)).toBeInTheDocument()
  })

  it('renders services link', () => {
    render(<About />)
    expect(screen.getByText('Our services')).toBeInTheDocument()
  })

  it('renders portrait image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /jon campbell/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('lawguard-about'))
  })

  it('has a section with id about', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})
