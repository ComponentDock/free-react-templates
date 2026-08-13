import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the section title, paragraphs and portrait', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    for (const paragraph of [...about.paragraphsLeft, ...about.paragraphsRight]) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByRole('img', { name: about.alt })).toHaveAttribute('src', about.image)
  })

  it('links the Contact Me button to the contact section', () => {
    render(<About />)
    const cta = screen.getByRole('link', { name: about.cta })
    expect(cta).toHaveAttribute('href', about.href)
    fireEvent.click(cta)
  })
})
