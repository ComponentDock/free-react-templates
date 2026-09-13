import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the site name and tagline', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Newscope')
    expect(screen.getByText(/Your daily source/)).toBeInTheDocument()
  })

  it('renders the banner image', () => {
    render(<Header />)
    const banner = document.querySelector('.bg-cover')
    expect(banner).toBeTruthy()
  })
})
