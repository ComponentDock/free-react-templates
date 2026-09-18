import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and 4 service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Graphic Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Copywriting' })).toBeInTheDocument()
  })

  it('has the correct section landmark', () => {
    render(<Services />)

    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
  })
})
