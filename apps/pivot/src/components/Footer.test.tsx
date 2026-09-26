import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Lets Talk section', () => {
    render(<Footer />)
    expect(screen.getByText('Lets Talk')).toBeInTheDocument()
    expect(screen.getByText('Tell us about your project')).toBeInTheDocument()
  })

  it('renders the Info section with contact details', () => {
    render(<Footer />)
    expect(screen.getByText('Info')).toBeInTheDocument()
    expect(screen.getByText(/youremail@mail\.com/)).toBeInTheDocument()
    expect(screen.getByText(/\(\+00\) 9876 5432/)).toBeInTheDocument()
    expect(screen.getByText(/291 South 21th Street/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Dribbble')).toBeInTheDocument()
  })

  it('renders Component Dock attribution in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
