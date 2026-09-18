import { render, screen } from '@testing-library/react'
import { YogaStyles } from './YogaStyles'

describe('YogaStyles', () => {
  it('renders section heading', () => {
    render(<YogaStyles />)
    expect(screen.getByText('Perfect Yoga Style')).toBeInTheDocument()
  })

  it('renders yoga style cards', () => {
    render(<YogaStyles />)
    expect(screen.getByText('Hatha Yoga')).toBeInTheDocument()
    expect(screen.getByText('Vinyasa Flow')).toBeInTheDocument()
    expect(screen.getByText('Yin Yoga')).toBeInTheDocument()
  })
})
