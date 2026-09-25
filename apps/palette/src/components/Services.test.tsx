import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'My Services' })).toBeInTheDocument()
  })

  it('renders all eight service cards', () => {
    render(<Services />)

    const titles = [
      'Web Design',
      'Web Application',
      'Web Development',
      'Banner Design',
      'Branding',
      'Icon Design',
      'Graphic Design',
      'SEO',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
