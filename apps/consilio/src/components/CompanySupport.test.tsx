import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CompanySupport } from './CompanySupport'

describe('CompanySupport', () => {
  it('shows the image on the red panel and the navy panel copy', () => {
    render(<CompanySupport />)

    const image = screen.getByAltText('Business consultation meeting')
    expect(image).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: /We support our clients/ }),
    ).toBeInTheDocument()

    expect(screen.getByText(/From your first strategy workshop/)).toBeInTheDocument()
    expect(screen.getByText(/We combine rigorous analysis/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'More About Us' })).toBeInTheDocument()
  })
})
