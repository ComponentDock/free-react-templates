import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('Jade Template App', () => {
  it('renders navbar, hero, features, accordion showcase, and footer', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('Jade')).toBeInTheDocument()
    expect(screen.getAllByText('Features').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Explore Accordion').length).toBeGreaterThan(0)

    // Hero
    expect(screen.getByText(/Elegant & Responsive Accordion Components/i)).toBeInTheDocument()

    // Features
    expect(screen.getByText('Designed for Excellence')).toBeInTheDocument()
    expect(screen.getByText('Modular Architecture')).toBeInTheDocument()

    // Accordion Showcase
    expect(screen.getByText('Interactive Accordion Showcase')).toBeInTheDocument()
    expect(screen.getByText('What is Jade Accordion Showcase?')).toBeInTheDocument()
  })

  it('allows expanding and collapsing accordion items', async () => {
    const user = userEvent.setup()
    render(<App />)

    const firstItemButton = screen.getByRole('button', {
      name: /What is Jade Accordion Showcase?/i,
    })
    expect(firstItemButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(
        /Jade is a modern, highly polished, accessible accordion component library/i,
      ),
    ).toBeInTheDocument()

    // Collapse first item
    await user.click(firstItemButton)
    expect(firstItemButton).toHaveAttribute('aria-expanded', 'false')

    // Expand second item
    const secondItemButton = screen.getByRole('button', {
      name: /How do I integrate Jade into my existing React application?/i,
    })
    await user.click(secondItemButton)
    expect(secondItemButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByText(/You can import the accordion components directly/i),
    ).toBeInTheDocument()
  })

  it('supports searching and filtering accordion items', async () => {
    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search accordion...')
    await user.type(searchInput, 'accessibility')

    expect(
      screen.getByText('What accessibility standards are built into the accordion?'),
    ).toBeInTheDocument()
    expect(screen.queryByText('What is Jade Accordion Showcase?')).not.toBeInTheDocument()

    // Clear search and test category filter
    await user.clear(searchInput)
    const designFilterBtn = screen.getByRole('button', { name: 'Design' })
    await user.click(designFilterBtn)

    expect(
      screen.getByText('Is Jade fully responsive across mobile and desktop viewports?'),
    ).toBeInTheDocument()
    expect(screen.queryByText('What is Jade Accordion Showcase?')).not.toBeInTheDocument()
  })

  it('shows no matching items message when search returns nothing', async () => {
    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search accordion...')
    await user.type(searchInput, 'nonexistenttopicxyz')

    expect(screen.getByText('No matching accordion items found.')).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /More templates at Component Dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
