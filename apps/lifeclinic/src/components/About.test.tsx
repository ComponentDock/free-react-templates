import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutTitle, aboutDescription, aboutLearnMore, aboutServices } from '../data'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: aboutTitle })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(aboutDescription)).toBeInTheDocument()
  })

  it('renders the learn more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: aboutLearnMore })).toBeInTheDocument()
  })

  it('renders all service items', () => {
    render(<About />)
    for (const service of aboutServices) {
      expect(screen.getByText(service.title)).toBeInTheDocument()
    }
  })
})
