import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_LEFT_TITLE, ABOUT_RIGHT_TITLE, ABOUT_STAT, CASE_COUNTERS } from '../data'

describe('About', () => {
  it('renders both centered columns with headings, copy and the signature line', () => {
    const { container } = render(<About />)

    expect(screen.getByRole('heading', { name: ABOUT_LEFT_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: ABOUT_RIGHT_TITLE })).toBeInTheDocument()
    expect(screen.getByText('Esquire & Partners')).toBeInTheDocument()

    const images = container.querySelectorAll('img')
    expect(images.length).toBe(2)
  })

  it('renders the 93% hover stat and both bronze-gold case counters', () => {
    render(<About />)

    expect(screen.getByText(ABOUT_STAT.value)).toBeInTheDocument()
    expect(screen.getByText(ABOUT_STAT.label)).toBeInTheDocument()

    for (const counter of CASE_COUNTERS) {
      expect(screen.getByText(String(counter.value))).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })
})
