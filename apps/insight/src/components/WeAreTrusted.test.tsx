import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeAreTrusted } from './WeAreTrusted'

describe('WeAreTrusted', () => {
  it('renders overlay card with heading', () => {
    render(<WeAreTrusted />)
    expect(screen.getByText('What we do for you')).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<WeAreTrusted />)
    const img = screen.getByRole('img', { name: /trusted consulting/i })
    expect(img).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<WeAreTrusted />)
    expect(screen.getByText(/comprehensive consulting services/)).toBeInTheDocument()
  })
})
