import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Guarantee, ServiceGrid } from './Guarantee'
import { guarantees } from '../data'

describe('Guarantee', () => {
  it('renders the heading and six guarantee cards with titles and blurbs', () => {
    render(<Guarantee />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'The WebHost Guarantee' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(6)
    for (const service of guarantees) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getAllByText(service.blurb).length).toBeGreaterThanOrEqual(1)
    }
    expect(document.querySelectorAll('svg')).toHaveLength(6)
  })

  it('ServiceGrid renders exactly the services it receives', () => {
    render(<ServiceGrid services={guarantees.slice(0, 2)} />)
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(
      screen.getByRole('heading', { level: 3, name: guarantees[0]!.title }),
    ).toBeInTheDocument()
  })
})
