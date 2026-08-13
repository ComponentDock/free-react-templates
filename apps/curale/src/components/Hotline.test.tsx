import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hotline } from './Hotline'
import { hotline } from '../data'

describe('Hotline', () => {
  it('renders the heading, large phone number and support copy', () => {
    render(<Hotline />)
    expect(screen.getByRole('heading', { level: 2, name: hotline.heading })).toBeInTheDocument()
    expect(screen.getByText(hotline.phone)).toBeInTheDocument()
    expect(screen.getByText(hotline.copy)).toBeInTheDocument()
  })

  it('uses the background image with a gradient overlay', () => {
    const { container } = render(<Hotline />)
    const section = container.querySelector('section') as HTMLElement
    expect(section).toHaveStyle({ backgroundImage: `url(${hotline.image})` })
    const overlay = container.querySelector('.absolute.inset-0') as HTMLElement
    expect(overlay).toHaveStyle({
      backgroundImage: 'linear-gradient(to top right, rgba(36,76,253,0.9), rgba(21,228,253,0.9))',
    })
  })
})
