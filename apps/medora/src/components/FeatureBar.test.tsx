import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBar } from './FeatureBar'

describe('FeatureBar', () => {
  it('renders four quick-access tiles with labels, subtexts, and anchors', () => {
    render(<FeatureBar />)
    expect(
      screen.getByRole('link', { name: /departments\s*the backbone of our clinic/i }),
    ).toHaveAttribute('href', '#departments')
    expect(
      screen.getByRole('link', { name: /medical services\s*a list of all services/i }),
    ).toHaveAttribute('href', '#departments')
    expect(
      screen.getByRole('link', { name: /find a doctor\s*our staff by department/i }),
    ).toHaveAttribute('href', '#doctors')
    expect(
      screen.getByRole('link', { name: /request an appointment\s*call us or book online/i }),
    ).toHaveAttribute('href', '#appointment')
  })

  it('renders an icon inside every tile', () => {
    const { container } = render(<FeatureBar />)
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(4)
  })
})
