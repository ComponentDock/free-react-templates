import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OurFeatures } from './OurFeatures'

describe('OurFeatures', () => {
  it('renders the heading and three approach tiles', () => {
    render(<OurFeatures />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Our Approach to Design is Pretty Simple and Clear',
      }),
    ).toBeInTheDocument()

    for (const title of ['Easy Notifications', 'Fully Responsive', 'Editable Layout']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
