import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    const portfolio = screen.getByText('Our Portfolio')
    const blog = screen.getByText('Latest from the Blog')
    const footer = screen.getByText(/Component Dock/)

    expect(nav).toBeInTheDocument()
    expect(portfolio).toBeInTheDocument()
    expect(blog).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Fotoroll — Photography Portfolio')
  })

  it('renders the hero section with heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /Mountain Vistas/ })).toBeInTheDocument()
  })

  it('renders the view projects CTA', () => {
    render(<App />)
    expect(screen.getByText('View Projects')).toBeInTheDocument()
  })

  it('renders the portfolio grid with images', () => {
    render(<App />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(10)
  })

  it('renders the blog section with posts', () => {
    render(<App />)
    expect(screen.getByText('The Art of Composition')).toBeInTheDocument()
    expect(screen.getByText('Shooting in Low Light')).toBeInTheDocument()
    expect(screen.getByText('Finding Your Style')).toBeInTheDocument()
  })

  it('renders footer social links', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
