import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the profile photo', () => {
    render(<Sidebar />)
    const img = screen.getByAltText('Profile photo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders General Information heading', () => {
    render(<Sidebar />)
    expect(screen.getByText('General Information')).toBeInTheDocument()
  })

  it('displays personal info items', () => {
    render(<Sidebar />)
    expect(screen.getByText(/Jeremy Smith/)).toBeInTheDocument()
    expect(screen.getByText(/London, UK/)).toBeInTheDocument()
    expect(screen.getByText(/hello@visage.dev/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Sidebar />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
  })
})
