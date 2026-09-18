import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all four statistics', () => {
    render(<Stats />)

    expect(screen.getByText('531')).toBeInTheDocument()
    expect(screen.getByText('Digital X-rays Taken')).toBeInTheDocument()

    expect(screen.getByText('14,000')).toBeInTheDocument()
    expect(screen.getByText('Tooth Brushes Distributed')).toBeInTheDocument()

    expect(screen.getByText('678')).toBeInTheDocument()
    expect(screen.getByText('Successful Extractions')).toBeInTheDocument()

    expect(screen.getByText('2,134')).toBeInTheDocument()
    expect(screen.getByText('Happy Patients')).toBeInTheDocument()
  })

  it('has a dark background overlay', () => {
    const { container } = render(<Stats />)
    expect(container.firstElementChild).toHaveStyle({
      backgroundImage: expect.stringContaining('linear-gradient'),
    })
  })
})
