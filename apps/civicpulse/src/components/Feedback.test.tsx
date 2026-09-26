import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Feedback } from './Feedback'

describe('Feedback', () => {
  it('renders heading', () => {
    render(<Feedback />)
    expect(screen.getByRole('heading', { name: /What People Say About Us/i })).toBeInTheDocument()
  })

  it('renders accordion items', () => {
    render(<Feedback />)
    expect(screen.getByText('Success Feedback')).toBeInTheDocument()
    expect(screen.getByText('Info Feedback')).toBeInTheDocument()
    expect(screen.getByText('Danger Feedback')).toBeInTheDocument()
    expect(screen.getByText('Warning Feedback')).toBeInTheDocument()
  })

  it('first item is open by default', () => {
    render(<Feedback />)
    expect(screen.getByText(/community programs have reached/)).toBeInTheDocument()
  })

  it('renders video play button', () => {
    render(<Feedback />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('clicking an open accordion closes it', () => {
    render(<Feedback />)
    const successBtn = screen.getByRole('button', { name: /Success Feedback/i })
    fireEvent.click(successBtn)
    expect(screen.queryByText(/community programs have reached/)).not.toBeInTheDocument()
  })

  it('clicking a closed accordion opens it', () => {
    render(<Feedback />)
    const infoBtn = screen.getByRole('button', { name: /Info Feedback/i })
    fireEvent.click(infoBtn)
    expect(screen.getByText(/Stay informed about upcoming events/)).toBeInTheDocument()
  })

  it('clicking the open accordion again closes it and shows the new one', () => {
    render(<Feedback />)
    // First item is open, click it to close
    const successBtn = screen.getByRole('button', { name: /Success Feedback/i })
    fireEvent.click(successBtn)
    expect(screen.queryByText(/community programs have reached/)).not.toBeInTheDocument()
    // Now open danger
    const dangerBtn = screen.getByRole('button', { name: /Danger Feedback/i })
    fireEvent.click(dangerBtn)
    expect(screen.getByText(/We must act now/)).toBeInTheDocument()
  })
})
