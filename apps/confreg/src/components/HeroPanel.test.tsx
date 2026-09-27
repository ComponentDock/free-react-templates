import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroPanel } from './HeroPanel'

describe('HeroPanel', () => {
  it('renders the Register Now heading', () => {
    render(<HeroPanel />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Register Now')
  })

  it('shows the subtitle text', () => {
    render(<HeroPanel />)
    expect(screen.getByText('while seats are available !')).toBeInTheDocument()
  })

  it('shows a conference event image', () => {
    render(<HeroPanel />)
    const img = screen.getByRole('img', { name: /conference/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum'))
  })
})
