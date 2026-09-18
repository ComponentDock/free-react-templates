import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesIntro } from './ServicesIntro'

describe('ServicesIntro', () => {
  it('renders 3 service cards', () => {
    render(<ServicesIntro />)
    expect(screen.getByRole('heading', { name: 'Periodontics' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Tooth Whitening' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Preventative Care' })).toBeInTheDocument()
  })

  it('renders descriptions for each card', () => {
    render(<ServicesIntro />)
    expect(screen.getByText(/Expert gum disease treatment/)).toBeInTheDocument()
    expect(screen.getByText(/Professional teeth whitening/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive check-ups/)).toBeInTheDocument()
  })
})
