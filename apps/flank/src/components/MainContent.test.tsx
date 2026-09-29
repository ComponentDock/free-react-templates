import { render, screen } from '@testing-library/react'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders the page heading', () => {
    render(<MainContent />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Sidebar Navigation' }),
    ).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<MainContent />)
    expect(screen.getByText('A clean sidebar template')).toBeInTheDocument()
  })

  it('renders all four content cards', () => {
    render(<MainContent />)
    expect(screen.getByText('Responsive Design')).toBeInTheDocument()
    expect(screen.getByText('Clean Code')).toBeInTheDocument()
    expect(screen.getByText('Customizable')).toBeInTheDocument()
    expect(screen.getByText('Well Documented')).toBeInTheDocument()
  })

  it('renders card descriptions', () => {
    render(<MainContent />)
    expect(screen.getByText(/Fully responsive layouts/)).toBeInTheDocument()
    expect(screen.getByText(/Well-structured, maintainable code/)).toBeInTheDocument()
    expect(screen.getByText(/Easily modify colors/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive documentation/)).toBeInTheDocument()
  })

  it('renders body text paragraphs', () => {
    render(<MainContent />)
    expect(screen.getByText(/sidebar navigation template features/)).toBeInTheDocument()
    expect(screen.getByText(/sidebar includes a logo/)).toBeInTheDocument()
  })

  it('renders the main element with correct role', () => {
    render(<MainContent />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
