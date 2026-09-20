import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders section heading', () => {
    render(<Sponsors />)
    expect(screen.getByText('Our Top General Sponsors.')).toBeInTheDocument()
  })

  it('renders 6 sponsor logos', () => {
    render(<Sponsors />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})
