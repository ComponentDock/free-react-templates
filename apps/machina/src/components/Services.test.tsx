import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { SERVICES, SERVICES_BG, SERVICES_VIEW_MORE_LABEL } from '../data'

describe('Services', () => {
  it('renders three service cards over the fixed background image', () => {
    render(<Services />)
    const section = screen.getByRole('region', { name: 'Services' })
    expect(section).toHaveStyle({ backgroundImage: `url("${SERVICES_BG}")` })
    SERVICES.forEach((service) => {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.text)).toBeInTheDocument()
    })
    expect(
      screen.getAllByRole('link', { name: new RegExp(SERVICES_VIEW_MORE_LABEL, 'i') }),
    ).toHaveLength(SERVICES.length)
  })
})
