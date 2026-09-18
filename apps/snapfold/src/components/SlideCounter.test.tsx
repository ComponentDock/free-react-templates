import { render, screen } from '@testing-library/react'
import { SlideCounter } from './SlideCounter'

describe('SlideCounter', () => {
  it('displays current and total', () => {
    render(<SlideCounter current={1} total={2} />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('/ 2')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<SlideCounter current={2} total={3} />)
    expect(screen.getByLabelText('Slide 2 of 3')).toBeInTheDocument()
  })
})
