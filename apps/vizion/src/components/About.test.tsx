import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders About me heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<About />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Vizion')).toBeInTheDocument()
  })

  it('has the about section id', () => {
    render(<About />)
    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })
})
