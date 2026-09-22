import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT } from '../data'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the quote', () => {
    render(<About />)
    expect(screen.getByText(new RegExp(ABOUT.quote.slice(0, 30)))).toBeInTheDocument()
  })

  it('renders both paragraphs', () => {
    render(<About />)
    expect(screen.getByText(new RegExp(ABOUT.paragraph1.slice(0, 30)))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(ABOUT.paragraph2.slice(0, 30)))).toBeInTheDocument()
  })
})
