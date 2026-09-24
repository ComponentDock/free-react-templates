import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { welcomeText, topBarHours, topBarPhone } from '../data'
import { describe, expect, it } from 'vitest'

describe('TopBar', () => {
  it('renders the welcome text', () => {
    render(<TopBar />)
    expect(screen.getByText(new RegExp(welcomeText))).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<TopBar />)
    expect(screen.getByText(topBarHours)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<TopBar />)
    expect(screen.getByText(topBarPhone)).toBeInTheDocument()
  })
})
