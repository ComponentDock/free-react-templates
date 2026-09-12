import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the section subtitle', () => {
    render(<Intro />)
    expect(screen.getByText('take a look at our')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Buy and Sell Bitcoin')
  })

  it('renders body text', () => {
    render(<Intro />)
    expect(screen.getByText(/Morbi ut dapibus dui/)).toBeInTheDocument()
  })

  it('renders the read more button', () => {
    render(<Intro />)
    expect(screen.getByRole('link', { name: /read more/i })).toHaveAttribute('href', '#')
  })

  it('displays the intro illustration image', () => {
    render(<Intro />)
    expect(screen.getByRole('img', { name: /bitcoin illustration/i })).toHaveAttribute(
      'src',
      expect.stringContaining('vestly-intro'),
    )
  })
})
