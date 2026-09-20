import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders the section title', () => {
    render(<Testimony />)
    expect(screen.getByText('What People Say')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Testimony />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
  })

  it('renders the quote', () => {
    render(<Testimony />)
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders the author', () => {
    render(<Testimony />)
    expect(screen.getByText('John Deo, CEO at TechCorp')).toBeInTheDocument()
  })

  it('has dark brown background', () => {
    const { container } = render(<Testimony />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-dark-brown')
  })
})
