import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { clientSeeds, clientsTitle } from '../data'
import { Clients } from './Clients'

describe('Clients', () => {
  it('shows the section heading', () => {
    render(<Clients />)
    expect(screen.getByRole('region', { name: clientsTitle })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: clientsTitle })).toBeInTheDocument()
  })

  it('renders a row of grayscale placeholder logos', () => {
    const { container } = render(<Clients />)
    const region = screen.getByRole('region', { name: clientsTitle })
    const images = within(region).getAllByRole('img')
    expect(images).toHaveLength(clientSeeds.length)
    for (const img of images) {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/persona-client')
      expect(img).toHaveClass('grayscale')
    }
    expect(container.querySelector('ul')).toBeInTheDocument()
  })
})
