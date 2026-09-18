import { render, screen } from '@testing-library/react'
import { MapPanel } from './MapPanel'

describe('MapPanel', () => {
  it('renders the map background image', () => {
    render(<MapPanel />)
    const img = screen.getByRole('img', { name: /map/i })
    expect(img).toBeInTheDocument()
  })

  it('displays the phone badge with phone number', () => {
    render(<MapPanel />)
    expect(screen.getByText(/00\) 345 6389/)).toBeInTheDocument()
  })

  it('includes a phone icon in the badge', () => {
    render(<MapPanel />)
    const badge = screen.getByText(/00\) 345 6389/).closest('div')
    expect(badge).toBeInTheDocument()
    expect(badge!.querySelector('svg')).toBeInTheDocument()
  })

  it('has a green badge background', () => {
    render(<MapPanel />)
    const badge = screen.getByText(/00\) 345 6389/).closest('span')
    expect(badge!.className).toContain('bg-brand-green')
  })
})
