import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Service Keeps You Smile' }),
    ).toBeInTheDocument()

    const titles = ['Teeth Whitening', 'Teeth Cleaning', 'Quality Brackets', 'Modern Anesthetic']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Professional whitening treatments/)).toBeInTheDocument()
    expect(screen.getByText(/Thorough dental cleanings/)).toBeInTheDocument()
    expect(screen.getByText(/Advanced orthodontic solutions/)).toBeInTheDocument()
    expect(screen.getByText(/Painless treatments/)).toBeInTheDocument()
  })
})
