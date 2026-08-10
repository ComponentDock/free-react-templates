import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { dateLine, locationLine, socialLabels, timeLine, utilitySocials } from '../data'

describe('TopBar', () => {
  it('shows location/weather, date and time on the left', () => {
    render(<TopBar />)
    expect(screen.getByText(locationLine)).toBeInTheDocument()
    expect(screen.getByText(dateLine)).toBeInTheDocument()
    expect(screen.getByText(timeLine)).toBeInTheDocument()
  })

  it('shows the five social icon links with accessible names', () => {
    render(<TopBar />)
    for (const name of utilitySocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders the light-grey bottom border bar', () => {
    const { container } = render(<TopBar />)
    expect(container.firstElementChild).toHaveClass('border-b', 'border-[#ddd]')
  })
})
