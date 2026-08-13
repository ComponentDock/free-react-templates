import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order with the shared chrome', () => {
    render(<App />)

    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('investors')).toBeInTheDocument()
    expect(screen.getByTestId('stats')).toBeInTheDocument()
    expect(screen.getByTestId('team')).toBeInTheDocument()
    expect(screen.getByTestId('press')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('blog')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()

    const main = screen.getByRole('main')
    const sectionIds = Array.from(main.querySelectorAll('section')).map((section) => section.id)
    expect(sectionIds).toEqual([
      'home-section',
      'investors-section',
      'about-section',
      'team-section',
      'press-section',
      'testimonials-section',
      'blog-section',
      'contact-section',
    ])
  })

  it('opens and closes the quote modal via the navbar button', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Get Quote' }))
    expect(screen.getByTestId('quote-modal')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get A Quote' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(screen.queryByTestId('quote-modal')).not.toBeInTheDocument()
  })

  it('credits Component Dock in the footer', () => {
    render(<App />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
