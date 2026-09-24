import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MostPopularNews } from './MostPopularNews'

describe('MostPopularNews', () => {
  it('renders the section heading', () => {
    render(<MostPopularNews />)
    expect(screen.getByText('Most Popular News')).toBeInTheDocument()
  })

  it('renders the featured article', () => {
    render(<MostPopularNews />)
    expect(
      screen.getByText('Dealing With Technical Support With 10 Useful Tips'),
    ).toBeInTheDocument()
  })

  it('renders carousel items', () => {
    render(<MostPopularNews />)
    expect(
      screen.getByText('Dealing With Technical Support 10 With Useful Tips Around'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('An Ugly Myspace Profile Will Sure Ruin Your Reputation'),
    ).toBeInTheDocument()
  })

  it('navigates carousel forward and backward', () => {
    render(<MostPopularNews />)
    const nextBtn = screen.getByLabelText('Next')
    const prevBtn = screen.getByLabelText('Previous')
    // First page - previous should be disabled
    expect(prevBtn).toBeDisabled()
    // Navigate forward
    fireEvent.click(nextBtn)
    expect(
      screen.getByText('Dealing With Technical Support 10 With Useful Tips Around'),
    ).toBeInTheDocument()
    // Now previous should be enabled
    expect(prevBtn).not.toBeDisabled()
    // Navigate backward
    fireEvent.click(prevBtn)
    expect(prevBtn).toBeDisabled()
  })
})
