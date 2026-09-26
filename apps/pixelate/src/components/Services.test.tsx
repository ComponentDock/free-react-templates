import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('My Expertise')).toBeInTheDocument()
  })

  it('renders all four service cards', () => {
    render(<Services />)
    expect(screen.getByText('Strategy & Direction')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('Growth & Analytics')).toBeInTheDocument()
  })

  it('renders learn more links for each service', () => {
    render(<Services />)
    const links = screen.getAllByText('Learn more →')
    expect(links).toHaveLength(4)
  })
})
