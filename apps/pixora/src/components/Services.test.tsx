import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('renders every service with image, title, blurb and View Details link', () => {
    const { container } = render(<Services />)
    expect(screen.getAllByRole('article')).toHaveLength(services.length)
    for (const service of services) {
      expect(screen.getByRole('img', { name: service.title })).toHaveAttribute('src', service.image)
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('a')).toHaveLength(services.length)
    const details = screen.getAllByRole('link', { name: /view details/i })
    for (const link of details) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })
})
