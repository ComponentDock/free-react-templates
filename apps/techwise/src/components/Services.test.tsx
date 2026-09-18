import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all four service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', {
        name: /We Provide Effective for Business Solutions/i,
      }),
    ).toBeInTheDocument()
    for (const service of ['UX/UI Design', 'Development', 'Branding', 'Search Optimization']) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/intuitive and visually stunning interfaces/i)).toBeInTheDocument()
    expect(screen.getByText(/robust, scalable web and mobile applications/i)).toBeInTheDocument()
  })

  it('renders learn more links for each service', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: /Learn more about/i })
    expect(links).toHaveLength(4)
  })
})
