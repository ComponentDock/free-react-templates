import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the page heading', () => {
    render(<MainContent />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sidebar #04')
  })

  it('renders two lorem ipsum paragraphs', () => {
    render(<MainContent />)
    const paragraphs = screen.getAllByText(/Lorem ipsum/)
    expect(paragraphs).toHaveLength(2)
  })

  it('renders the main element', () => {
    render(<MainContent />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<MainContent />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders footer text with Made with', () => {
    render(<MainContent />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
