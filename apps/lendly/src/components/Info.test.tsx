import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Info } from './Info'

describe('Info', () => {
  it('renders the photo, heading, hours, and contact lines', () => {
    render(<Info />)
    expect(
      screen.getByRole('heading', { level: 2, name: "We're here to help" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Monday to Thursday (8am to 8pm), and Friday (8am to 5pm).'),
    ).toBeInTheDocument()
    expect(screen.getByText('+34 56873 2246')).toBeInTheDocument()
    expect(screen.getByText('contact@lendly.com')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://picsum.photos/id/20/800/640')
  })
})
