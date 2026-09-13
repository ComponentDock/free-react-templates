import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectCTA } from './ProjectCTA'

describe('ProjectCTA', () => {
  it('renders the CTA heading', () => {
    render(<ProjectCTA />)
    expect(screen.getByText('Get to Know Project Estimate?')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<ProjectCTA />)
    expect(screen.getByText('Get Free Estimate')).toBeInTheDocument()
  })

  it('renders the background image element', () => {
    render(<ProjectCTA />)
    const images = document.querySelectorAll('img')
    expect(images.length).toBeGreaterThan(0)
  })
})
