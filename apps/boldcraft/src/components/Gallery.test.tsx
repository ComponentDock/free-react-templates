import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section title', () => {
    render(<Gallery />)
    expect(screen.getByText('My Works')).toBeInTheDocument()
  })

  it('renders all four work items', () => {
    render(<Gallery />)
    const titles = ['Brand Identity', 'Mobile App', 'Dashboard UI', 'Marketing Site']
    titles.forEach((t) => {
      expect(screen.getByText(t)).toBeInTheDocument()
    })
  })

  it('renders More Work links', () => {
    render(<Gallery />)
    const links = screen.getAllByText('More Work')
    expect(links.length).toBe(4)
  })
})
