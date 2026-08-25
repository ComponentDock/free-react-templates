import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('More templates at Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the brand logo', () => {
    render(<Footer />)
    expect(screen.getAllByText('Crest').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Services column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getAllByText('Design & Strategy').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Navigation column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
  })

  it('renders Contact us column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact us' })).toBeInTheDocument()
    expect(screen.getByText('consulto98@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('76/A, Green road, NYC')).toBeInTheDocument()
    expect(screen.getByText('(80) 783 367-3904')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})
