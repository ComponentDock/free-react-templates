import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo text', () => {
    render(<Sidebar />)
    expect(screen.getByText('Editorial')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar />)
    const links = ['Home', 'Style', 'Fashion', 'Travel', 'Sports', 'Video', 'Archives']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('marks the first nav link as active', () => {
    render(<Sidebar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('font-semibold')
  })

  it('renders social media links', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Sidebar />)
    const dockLink = screen.getByText('Component Dock')
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('renders the navigation with aria-label', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })

  it('social links point to #', () => {
    render(<Sidebar />)
    const fb = screen.getByLabelText('Facebook')
    const tw = screen.getByLabelText('Twitter')
    const ig = screen.getByLabelText('Instagram')
    const li = screen.getByLabelText('LinkedIn')
    expect(fb).toHaveAttribute('href', '#')
    expect(tw).toHaveAttribute('href', '#')
    expect(ig).toHaveAttribute('href', '#')
    expect(li).toHaveAttribute('href', '#')
  })
})
