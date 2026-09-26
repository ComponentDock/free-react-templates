import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /our services/i })).toBeInTheDocument()
  })

  it('renders all three service titles', () => {
    render(<Services />)
    expect(screen.getByText('Shooting')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
    expect(screen.getByText('Editing')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/professional photography sessions/i)).toBeInTheDocument()
    expect(screen.getByText(/cinematic video production/i)).toBeInTheDocument()
    expect(screen.getByText(/expert photo and video editing/i)).toBeInTheDocument()
  })

  it('renders images with picsum sources', () => {
    render(<Services />)
    const images = screen.getAllByRole('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })

  it('has section with id services', () => {
    render(<Services />)
    expect(document.querySelector('#services')).toBeInTheDocument()
  })
})
