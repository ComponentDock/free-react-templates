import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the main headline with feastly branding', () => {
    render(<Banner />)

    expect(screen.getByText(/The most interesting food in the world/i)).toBeInTheDocument()
    expect(screen.getByText(/Discover the/)).toBeInTheDocument()
    expect(screen.getByText(/flavors/)).toBeInTheDocument()
    expect(screen.getByText(/of/)).toBeInTheDocument()
    expect(screen.getByText(/feastly/)).toBeInTheDocument()
  })

  it('has the hero section with id home', () => {
    render(<Banner />)

    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
  })
})
