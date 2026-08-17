import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Schedule } from './Schedule'

describe('Schedule', () => {
  it('renders the heading and three day tabs with the first panel visible', () => {
    render(<Schedule />)

    expect(screen.getByRole('heading', { level: 2, name: 'Schedule' })).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs.map((tab) => tab.textContent)).toEqual(['17th Aug', '18th Aug', '19th Aug'])
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')

    expect(screen.getByRole('tabpanel')).toBeVisible()
    expect(screen.getByText('Registration And Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Opening Remarks And Keynote')).toBeInTheDocument()
  })

  it('switches the visible sessions when a tab is selected', () => {
    render(<Schedule />)

    const tabs = screen.getAllByRole('tab')
    fireEvent.click(tabs[1]!)

    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Motion In Product Design')).toBeInTheDocument()
    expect(screen.queryByText('Registration And Breakfast')).not.toBeInTheDocument()

    fireEvent.click(tabs[2]!)
    expect(screen.getByText('Type At One Hundred Pixels')).toBeInTheDocument()
    expect(screen.queryByText('Motion In Product Design')).not.toBeInTheDocument()
  })
})
