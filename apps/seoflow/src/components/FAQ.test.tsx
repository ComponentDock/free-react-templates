import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading', () => {
    render(<FAQ />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders all 3 FAQ questions as buttons', () => {
    render(<FAQ />)
    expect(
      screen.getByRole('button', { name: /Adieus who direct esteem It esteems luckily\?/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Who direct esteem It esteems\?/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Duis consectetur feugiat auctor\?/i }),
    ).toBeInTheDocument()
  })

  it('expands a question when clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const btn1 = screen.getByRole('button', {
      name: /Adieus who direct esteem It esteems luckily\?/i,
    })
    // First item is open by default
    expect(btn1).toHaveAttribute('aria-expanded', 'true')
    // Click second item
    const btn2 = screen.getByRole('button', { name: /Who direct esteem It esteems\?/i })
    await user.click(btn2)
    expect(btn2).toHaveAttribute('aria-expanded', 'true')
  })

  it('collapses a question when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const btn1 = screen.getByRole('button', {
      name: /Adieus who direct esteem It esteems luckily\?/i,
    })
    // First is open by default; click to close
    await user.click(btn1)
    expect(btn1).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the FAQ image', () => {
    render(<FAQ />)
    expect(screen.getByRole('img', { name: /seo strategy illustration/i })).toBeInTheDocument()
  })
})
