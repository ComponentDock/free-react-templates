import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopBar } from './TopBar'
import { topBar } from '../data'

describe('TopBar', () => {
  it('renders the upcoming event label and countdown', () => {
    render(<TopBar />)
    expect(screen.getByText(topBar.upcomingLabel)).toBeInTheDocument()
    expect(screen.getByText(topBar.countdown.days)).toBeInTheDocument()
    expect(screen.getByText(topBar.countdown.hours)).toBeInTheDocument()
    expect(screen.getByText(topBar.countdown.mins)).toBeInTheDocument()
    expect(screen.getByText(topBar.countdown.secs)).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Google')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the readmore and account links', () => {
    render(<TopBar />)
    expect(screen.getByText(topBar.readmoreLabel)).toBeInTheDocument()
    expect(screen.getByText(topBar.accountLabel)).toBeInTheDocument()
  })
})
