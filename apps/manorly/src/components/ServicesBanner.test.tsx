import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBanner } from './ServicesBanner'

describe('ServicesBanner', () => {
  it('renders the red call-out heading and links back to the services grid', () => {
    render(<ServicesBanner />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Hello City We are leader in Services.')
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '#services')
    expect(screen.getByText(/Quis ipsum pendisse ultrices gravida/)).toBeInTheDocument()
  })
})
