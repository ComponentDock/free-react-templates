import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders categories', () => {
    render(<Footer />)
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Fonts')).toBeInTheDocument()
    expect(screen.getByText('Icons')).toBeInTheDocument()
    expect(screen.getByText('Misc')).toBeInTheDocument()
    expect(screen.getByText('Mockup')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()
    expect(screen.getByText('Vectors')).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('RSS')).toBeInTheDocument()
  })

  it('renders copyright area with Component Dock', () => {
    const { container } = render(<Footer />)
    const copyrightP = container.querySelector('footer p')
    expect(copyrightP).toBeInTheDocument()
    expect(copyrightP?.textContent).toContain('Made with')
    expect(copyrightP?.textContent).toContain('by')
  })
})
