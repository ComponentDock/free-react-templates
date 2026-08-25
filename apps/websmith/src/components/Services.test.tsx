import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders the eyebrow and heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Expertise/i })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Web Design',
      'Web Development',
      'Web Apps',
      'Mobile Apps',
      'CopyWriting',
      'Search Engine Optimization',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders a learn more link for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn more')
    expect(links).toHaveLength(6)
  })

  it('renders the section with light background', () => {
    render(<Services />)
    const section = document.getElementById('what-we-do-section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveStyle({ backgroundColor: '#f8f9fa' })
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Beautiful, intuitive interfaces/i)).toBeInTheDocument()
    expect(screen.getByText(/Robust, performant websites/i)).toBeInTheDocument()
  })

  it('renders an intro paragraph', () => {
    render(<Services />)
    expect(screen.getByText(/comprehensive suite of digital services/i)).toBeInTheDocument()
  })

  it('applies hover shadow on mouse enter and removes it on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const heading = screen.getByRole('heading', { name: 'Web Design' })
    const card = heading.closest('div')
    expect(card).not.toBeNull()

    // Initial state
    expect(card).toHaveStyle({ boxShadow: 'none' })

    // Hover
    await user.hover(card!)
    expect(card).toHaveStyle({ boxShadow: '0 10px 30px -10px rgba(0,0,0,.4)' })

    // Leave
    await user.unhover(card!)
    expect(card).toHaveStyle({ boxShadow: 'none' })
  })
})
