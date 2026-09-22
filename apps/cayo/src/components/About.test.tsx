import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('Watch Our Video')).toBeInTheDocument()
  })

  it('renders the About Us subheading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/premier destination for luxury/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<About />)
    const img = screen.getByAltText('Cayo Hotel video preview')
    expect(img).toBeInTheDocument()
  })
})
