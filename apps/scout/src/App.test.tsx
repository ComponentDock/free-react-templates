import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders white card container on gray background', () => {
    render(<App />)
    expect(screen.getByText(/What do you think about AU services/)).toBeInTheDocument()
  })

  it('displays step indicator 01/03 on load', () => {
    render(<App />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('/03')).toBeInTheDocument()
  })

  it('shows star ratings on step 1', () => {
    render(<App />)
    expect(screen.getByText('Overall Quality')).toBeInTheDocument()
    expect(screen.getByText('Ease of Use')).toBeInTheDocument()
    expect(screen.getByText('Features & Functionality')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
    expect(screen.getByText('Value of Money')).toBeInTheDocument()
  })

  it('shows Next button on step 1', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('does not show Previous button on step 1', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
  })

  it('updates rating when a star is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const starButtons = screen.getAllByRole('button', { name: /rate 5 out of 5/i })
    await user.click(starButtons[0]!)
    const svg = starButtons[0]?.querySelector('svg')
    expect(svg?.getAttribute('class')).toContain('fill-star')
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('Your Review')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write your comment here')).toBeInTheDocument()
  })

  it('navigates to step 3 when Next is clicked again', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText(/Enter your information manually below/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone number')).toBeInTheDocument()
  })

  it('shows Finish button on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
  })

  it('shows Previous button on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
  })

  it('navigates back to step 1 when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Overall Quality')).toBeInTheDocument()
  })

  it('shows completion message when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /finish/i }))
    expect(screen.getByText('Thank You!')).toBeInTheDocument()
    expect(screen.getByText(/Your feedback has been submitted/)).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
