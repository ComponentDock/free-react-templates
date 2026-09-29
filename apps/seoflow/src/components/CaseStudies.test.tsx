import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders the section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Our Selected Case Study')).toBeInTheDocument()
  })

  it('renders case study cards', () => {
    render(<CaseStudies />)
    expect(screen.getByText('Product Design')).toBeInTheDocument()
    expect(screen.getByText('Custom Website')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  })

  it('navigates to next case study on click', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)
    // Start at 0, click next → goes to 1
    await user.click(screen.getByRole('button', { name: /next case study/i }))
    expect(screen.getByText('Custom Website')).toBeInTheDocument()
    // Click next again → goes to 2
    await user.click(screen.getByRole('button', { name: /next case study/i }))
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    // Click next again → wraps to 0
    await user.click(screen.getByRole('button', { name: /next case study/i }))
    expect(screen.getByText('Product Design')).toBeInTheDocument()
  })

  it('navigates to previous case study on click', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)
    // Start at 0, click prev → wraps to 2
    await user.click(screen.getByRole('button', { name: /previous case study/i }))
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    // Click prev → goes to 1
    await user.click(screen.getByRole('button', { name: /previous case study/i }))
    expect(screen.getByText('Custom Website')).toBeInTheDocument()
    // Click prev → goes to 0
    await user.click(screen.getByRole('button', { name: /previous case study/i }))
    expect(screen.getByText('Product Design')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<CaseStudies />)
    await user.click(screen.getByRole('button', { name: /go to case study 3/i }))
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
  })
})
