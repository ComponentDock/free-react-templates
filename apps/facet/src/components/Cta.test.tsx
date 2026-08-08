import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading and the request quote button', () => {
    render(<Cta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Be Part of our Business' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request A Quote' })).toBeInTheDocument()
  })
})
