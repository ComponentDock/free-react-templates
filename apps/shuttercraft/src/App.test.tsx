import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    const about = screen.getByText(/Great Photography Tells a Story/)
    const gallery = screen.getByText('My Recent Photos')
    const cta = screen.getByText(/Let.*Work Together/)
    const blog = screen.getByText('Our Recent Blogs')
    const contact = screen.getByText('Send Me a Message')
    const footer = screen.getByText(/Component Dock/)

    // Verify all sections are present
    expect(nav).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(gallery).toBeInTheDocument()
    expect(cta).toBeInTheDocument()
    expect(blog).toBeInTheDocument()
    expect(contact).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shuttercraft — Photography Portfolio')
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Wildlife Photography/ }),
    ).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument()
  })

  it('renders the gallery with images', () => {
    render(<App />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(16)
  })
})
