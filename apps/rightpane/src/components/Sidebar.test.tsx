import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the sidebar element', () => {
    render(<Sidebar isOpen={true} />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('displays brand header', () => {
    render(<Sidebar isOpen={true} />)
    expect(screen.getByText('Kenitic')).toBeInTheDocument()
    expect(screen.getByText('Blog Agency')).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(<Sidebar isOpen={true} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
  })

  it('renders newsletter section', () => {
    render(<Sidebar isOpen={true} />)
    expect(screen.getByText('Subscribe for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders footer with copyright', () => {
    render(<Sidebar isOpen={true} />)
    expect(screen.getByText(/Copyright.*2019.*All rights reserved/)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Sidebar isOpen={true} />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('is visible when isOpen is true', () => {
    render(<Sidebar isOpen={true} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-0')
  })

  it('is hidden when isOpen is false', () => {
    render(<Sidebar isOpen={false} />)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toHaveClass('translate-x-full')
  })
})
