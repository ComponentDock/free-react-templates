import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutInfo } from './AboutInfo'

describe('AboutInfo', () => {
  it('renders the heading and description', () => {
    render(<AboutInfo />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Responsible Customer Support/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/reliable, empathetic customer support/i)).toBeInTheDocument()
  })

  it('renders the image and CTA button', () => {
    render(<AboutInfo />)
    expect(screen.getByRole('img', { name: /Customer support team/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })
})
