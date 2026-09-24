import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutTitle, aboutBlurb, learnMoreLabel, aboutItems } from '../data'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(aboutTitle)
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()
  })

  it('renders all checklist items', () => {
    render(<About />)
    for (const item of aboutItems) {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    }
  })

  it('renders the learn more CTA', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: learnMoreLabel })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /medical team/i })).toBeInTheDocument()
  })
})
