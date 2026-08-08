import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, sub-paragraph and background photo', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Everyone is welcome here/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Whether you're exploring faith for the first time/),
    ).toBeInTheDocument()
    expect(screen.getByAltText('Hands holding an open Bible')).toBeInTheDocument()
  })

  it('shows the solid and outlined CTAs', () => {
    render(<Hero />)

    const visit = screen.getByRole('link', { name: /Plan Your Visit/ })
    expect(visit).toHaveAttribute('href', '#service-times')
    const watch = screen.getByRole('link', { name: /Watch Online/ })
    expect(watch).toHaveAttribute('href', '#watch')
  })

  it('shows the scroll indicator', () => {
    render(<Hero />)

    const scroll = screen.getByRole('link', { name: /Scroll/ })
    expect(scroll).toHaveAttribute('href', '#service-times')
  })
})
