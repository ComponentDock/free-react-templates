import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES } from '../data'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'Interior design is for everyone.',
    )
  })

  it('renders three service cards with titles and blurbs', () => {
    render(<Services />)
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(SERVICES[0]!.text)).toHaveLength(SERVICES.length)
  })

  it('renders an icon for every card', () => {
    render(<Services />)
    expect(screen.getAllByLabelText(/service icon/)).toHaveLength(SERVICES.length)
  })
})
