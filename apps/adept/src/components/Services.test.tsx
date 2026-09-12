import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Services')
  })

  it('renders 6 service items', () => {
    render(<Services />)
    expect(screen.getByText('Branding Design')).toBeInTheDocument()
    expect(screen.getByText('WordPress Integration')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('HTML5/CSS3')).toBeInTheDocument()
    expect(screen.getByText('Web Templates')).toBeInTheDocument()
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
  })
})
