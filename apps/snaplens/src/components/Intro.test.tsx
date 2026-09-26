import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Intro from './Intro'

describe('Intro', () => {
  it('renders the section title', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('We Are So Creative')
  })

  it('renders the subtitle', () => {
    render(<Intro />)
    expect(screen.getByText('Amazing Studio')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Intro />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders the studio image', () => {
    render(<Intro />)
    expect(screen.getByAltText('Studio workspace')).toBeInTheDocument()
  })
})
