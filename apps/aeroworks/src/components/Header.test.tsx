import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the top bar with contact info', () => {
    render(<Header />)
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByText('info@aeroworks.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Header />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('AeroWorks')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    for (const link of ['Home', 'Cars', 'Blog', 'Pages']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the Add Car button', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Add Car' })).toBeInTheDocument()
  })

  it('has correct dark background on top bar', () => {
    const { container } = render(<Header />)
    const topBar = container.querySelector('.bg-header-bar')
    expect(topBar).toBeInTheDocument()
  })
})
