import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Candidates } from './Candidates'

describe('Candidates', () => {
  it('renders heading and candidate cards', () => {
    render(<Candidates />)
    expect(screen.getByText('Latest Candidates')).toBeInTheDocument()
    expect(screen.getByText('Danica Lewis')).toBeInTheDocument()
    expect(screen.getByText('Nicole Simon')).toBeInTheDocument()
    expect(screen.getByText('Cloe Meyer')).toBeInTheDocument()
  })

  it('navigates candidates with arrows', async () => {
    const user = userEvent.setup()
    render(<Candidates />)
    const prevBtn = screen.getByLabelText('Previous candidate')
    const nextBtn = screen.getByLabelText('Next candidate')

    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()

    await user.click(nextBtn)
    await user.click(prevBtn)
  })
})
