import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders phone number and email', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 231 231 209')).toBeInTheDocument()
    expect(screen.getByText('support@rankly.com')).toBeInTheDocument()
  })

  it('renders free SEO analysis link', () => {
    render(<TopBar />)
    expect(screen.getByText('Free SEO Analysis')).toBeInTheDocument()
  })
})
