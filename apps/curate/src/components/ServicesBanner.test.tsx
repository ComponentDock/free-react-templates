import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBanner } from './ServicesBanner'

describe('ServicesBanner', () => {
  it('renders heading', () => {
    render(<ServicesBanner />)
    expect(screen.getByText('This is what we can do for you')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<ServicesBanner />)
    expect(screen.getByText(/eco friendly system/)).toBeInTheDocument()
  })
})
