import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ImagePanel } from './ImagePanel'

describe('ImagePanel', () => {
  it('renders the event image', () => {
    render(<ImagePanel />)
    const img = screen.getByAltText(/event performer/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/regvault-event/600/500')
  })

  it('displays the address', () => {
    render(<ImagePanel />)
    expect(screen.getByText(/31st East Street, New York, NY/)).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<ImagePanel />)
    expect(screen.getByText(/T: 987 2345 743/)).toBeInTheDocument()
  })

  it('displays the email', () => {
    render(<ImagePanel />)
    expect(screen.getByText(/E: INFO@YOURWEB\.COM/)).toBeInTheDocument()
  })
})
