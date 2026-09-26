import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BioView } from './BioView'

describe('BioView', () => {
  it('displays the heading with the name', () => {
    render(<BioView />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent("Hi, I'm Kate Woodman")
  })

  it('displays the subtitle', () => {
    render(<BioView />)

    expect(screen.getByText('Web Designer & Developer')).toBeInTheDocument()
  })

  it('displays bio paragraphs', () => {
    render(<BioView />)

    const paragraphs = screen.getAllByText(/Lorem ipsum|Commodi/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })

  it('displays social links', () => {
    render(<BioView />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('social links have hover transition', () => {
    render(<BioView />)

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('transition-colors')
  })
})
