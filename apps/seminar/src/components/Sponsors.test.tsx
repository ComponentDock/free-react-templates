import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the section heading', () => {
    render(<Sponsors />)
    expect(screen.getByRole('heading', { level: 2, name: 'Sponsors' })).toBeInTheDocument()
  })

  it('renders all 6 sponsor names', () => {
    render(<Sponsors />)
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('DesignHub')).toBeInTheDocument()
    expect(screen.getByText('CodeBase')).toBeInTheDocument()
    expect(screen.getByText('PixelForge')).toBeInTheDocument()
    expect(screen.getByText('TechWave')).toBeInTheDocument()
    expect(screen.getByText('StartupLab')).toBeInTheDocument()
  })

  it('renders the Be a Sponsor CTA', () => {
    render(<Sponsors />)
    expect(screen.getByRole('link', { name: 'Be a Sponsor' })).toBeInTheDocument()
  })

  it('has the sponsors section id', () => {
    const { container } = render(<Sponsors />)
    expect(container.querySelector('#sponsors')).toBeInTheDocument()
  })
})
