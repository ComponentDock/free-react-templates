import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Me')
  })

  it('renders subheading and description', () => {
    render(<About />)
    expect(screen.getByText('We can make it together')).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('renders the CV download button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Download my CV' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About me')).toBeInTheDocument()
  })
})
