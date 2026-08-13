import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading, subtext, and four hosting plan cards', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Choose your Hosting Plan/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Your domain control panel is designed for ease-of-use/),
    ).toBeInTheDocument()

    for (const name of ['Share Hosting', 'VPS Hosting', 'Wordpress Hosting', 'Dedicated Hosting']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getAllByText('Start from $2.5/m')).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: /Start Now/ })).toHaveLength(4)
  })
})
