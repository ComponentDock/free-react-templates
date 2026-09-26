import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections in order', () => {
    render(<App />)
    const navbar = screen.getByText('Gaze')
    const hero = screen.getAllByRole('heading', { level: 2 })[0]!
    const gallery = screen.getByText(/The camera makes you forget/i)
    const blog = screen.getByText(/Latest from the Blog/i)
    const footer = screen.getByText(/Get in Touch/i)

    const sections = [navbar, hero, gallery, blog, footer]
    for (let i = 1; i < sections.length; i++) {
      const prev = sections[i - 1]!
      const curr = sections[i]!
      expect(prev.compareDocumentPosition(curr) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    }
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Gaze — Photography Gallery Template')
  })
})
