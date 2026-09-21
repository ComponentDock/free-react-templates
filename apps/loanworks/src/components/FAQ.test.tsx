import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently ask')).toBeInTheDocument()
  })

  it('renders all four questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Adieus who direct esteem It esteems luckily?')).toBeInTheDocument()
    expect(screen.getByText('Who direct esteem It esteems?')).toBeInTheDocument()
    expect(screen.getByText('Duis consectetur feugiat auctor?')).toBeInTheDocument()
    expect(screen.getByText('Consectetur feugiat auctor?')).toBeInTheDocument()
  })

  it('shows the first answer by default', () => {
    render(<FAQ />)
    expect(screen.getByText(/Esteem spirit temper too say adieus/)).toBeInTheDocument()
  })

  it('toggles answers on click', async () => {
    render(<FAQ />)
    const firstQuestion = screen.getByText('Adieus who direct esteem It esteems luckily?')
    await userEvent.click(firstQuestion)
    const answers = screen.queryAllByText(/Esteem spirit temper too say adieus/)
    expect(answers).toHaveLength(0)
  })

  it('opens second question and collapses first', async () => {
    render(<FAQ />)
    const secondQuestion = screen.getByText('Who direct esteem It esteems?')
    await userEvent.click(secondQuestion)
    const answers = screen.queryAllByText(/Esteem spirit temper too say adieus/)
    expect(answers).toHaveLength(1)
  })
})
