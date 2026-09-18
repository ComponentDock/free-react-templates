import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Download } from './Download'

describe('Download', () => {
  it('renders the section heading', () => {
    render(<Download />)
    expect(screen.getByRole('heading', { name: /download our app/i })).toBeInTheDocument()
  })

  it('renders App Store and Play Store buttons', () => {
    render(<Download />)
    expect(screen.getByText(/app store/i)).toBeInTheDocument()
    expect(screen.getByText(/play store/i)).toBeInTheDocument()
  })
})
