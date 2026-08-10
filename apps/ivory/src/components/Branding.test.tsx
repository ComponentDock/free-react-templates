import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Branding } from './Branding'

describe('Branding', () => {
  it('renders the script wordmark logo', () => {
    render(<Branding />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Ivory')
  })

  it('renders the uppercase Personal Blog tagline', () => {
    render(<Branding />)
    expect(screen.getByText('Personal Blog')).toBeInTheDocument()
  })
})
