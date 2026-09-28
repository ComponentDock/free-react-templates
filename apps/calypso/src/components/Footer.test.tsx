import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer section', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders the CTA heading', () => {
    render(<Footer />)
    expect(screen.getByText(/Have a project in mind/)).toBeInTheDocument()
  })

  it('renders the CTA buttons', () => {
    render(<Footer />)
    expect(screen.getByText("Let's Talk")).toBeInTheDocument()
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright with brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Calypso')).toBeInTheDocument()
    expect(screen.getByText(/Built with React/)).toBeInTheDocument()
  })

  it('renders the footer nav links', () => {
    render(<Footer />)
    expect(
      screen.getByText('Digital Product Designer crafting meaningful experiences.'),
    ).toBeInTheDocument()
  })
})
