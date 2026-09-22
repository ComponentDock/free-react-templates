import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Luxury & Comfort')
    // "Wavecrest" appears in navbar brand + footer heading
    expect(screen.getAllByText('Wavecrest').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Our Newsletter')).toBeInTheDocument()
    // "Deluxe Room" appears in Intro heading + RoomFeatures
    expect(screen.getAllByText('Deluxe Room').length).toBeGreaterThanOrEqual(2)
  })
})
