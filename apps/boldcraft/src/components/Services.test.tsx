import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByText('My Expertise')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    const titles = ['UI Design', 'UX Research', 'Brand Strategy', 'Web Development']
    titles.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument()
    })
  })

  it('renders browse links', () => {
    render(<Services />)
    const links = screen.getAllByText('Browse')
    expect(links.length).toBe(4)
  })
})
