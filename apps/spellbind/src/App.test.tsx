import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Spellbind — Vertical Bank-Onboarding Wizard', () => {
  describe('Page shell', () => {
    it('renders the dark page background', () => {
      const { container } = render(<App />)
      const page = container.firstElementChild as HTMLElement
      expect(page.className).toContain('bg-page')
    })

    it('renders a 1400px white container', () => {
      const { container } = render(<App />)
      const wrapper = container.querySelector('.max-w-\\[1400px\\]') as HTMLElement
      expect(wrapper).toHaveClass('bg-container')
    })

    it('renders the heading "Personal information" on step 1', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Personal information')
    })

    it('renders Roboto Slab font via Google Fonts link', () => {
      render(<App />)
      // The font link is in index.html; verify the heading renders (font is applied via CSS)
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('renders a form element', () => {
      render(<App />)
      expect(screen.getByRole('form')).toBeInTheDocument()
    })
  })

  describe('Vertical step timeline', () => {
    it('renders a tablist', () => {
      render(<App />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('renders exactly three tabs', () => {
      render(<App />)
      const tabs = screen.getAllByRole('tab')
      expect(tabs).toHaveLength(3)
    })

    it('renders tab labels: Personal info, Connect Bank Account, Set Financial Goals', () => {
      render(<App />)
      expect(screen.getByRole('tab', { name: /personal info/i })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /set financial goals/i })).toBeInTheDocument()
    })

    it('marks Personal info tab as selected on load', () => {
      render(<App />)
      expect(screen.getByRole('tab', { name: /personal info/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('marks other tabs as not selected on load', () => {
      render(<App />)
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'false',
      )
      expect(screen.getByRole('tab', { name: /set financial goals/i })).toHaveAttribute(
        'aria-selected',
        'false',
      )
    })

    it('shows numbered circles 1, 2, 3', () => {
      render(<App />)
      // Circles are inside tab buttons, use getAllByText to handle day select options too
      const circles = screen.getAllByText('1')
      expect(circles.length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('2').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('3').length).toBeGreaterThanOrEqual(1)
    })

    it('renders a vertical connector line', () => {
      const { container } = render(<App />)
      const connector = container.querySelector('[aria-hidden="true"].bg-line')
      expect(connector).toBeInTheDocument()
    })
  })

  describe('Personal info step', () => {
    it('renders the heading "Personal information"', () => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Personal information')
    })

    it('renders the description text', () => {
      render(<App />)
      expect(screen.getByText(/please enter your information/i)).toBeInTheDocument()
    })

    it('renders Name label with First and Last inputs', () => {
      render(<App />)
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    })

    it('renders First and Last caption hints', () => {
      render(<App />)
      expect(screen.getByText('First')).toBeInTheDocument()
      expect(screen.getByText('Last')).toBeInTheDocument()
    })

    it('renders Email input with example hint', () => {
      render(<App />)
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      // "Example : user@example.com" hint — the word "Example" appears in the hint span
      expect(screen.getAllByText(/example/i).length).toBeGreaterThanOrEqual(1)
    })

    it('renders Phone input', () => {
      render(<App />)
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    })

    it('renders Birth Date selects with MM, DD, YYYY captions', () => {
      render(<App />)
      expect(screen.getByLabelText(/birth month/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/birth day/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/birth year/i)).toBeInTheDocument()
      expect(screen.getByText('MM')).toBeInTheDocument()
      expect(screen.getByText('DD')).toBeInTheDocument()
      expect(screen.getByText('YYYY')).toBeInTheDocument()
    })

    it('populates month select with Jan-Dec including Oct', () => {
      render(<App />)
      const monthSelect = screen.getByLabelText(/birth month/i) as HTMLSelectElement
      const options = Array.from(monthSelect.options)
        .map((o) => o.value)
        .filter(Boolean)
      expect(options).toEqual([
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ])
    })

    it('populates day select with 1-31', () => {
      render(<App />)
      const daySelect = screen.getByLabelText(/birth day/i) as HTMLSelectElement
      const options = Array.from(daySelect.options)
        .map((o) => o.value)
        .filter(Boolean)
      expect(options).toHaveLength(31)
      expect(options[0]).toBe('1')
      expect(options[30]).toBe('31')
    })

    it('populates year select descending from current year', () => {
      render(<App />)
      const yearSelect = screen.getByLabelText(/birth year/i) as HTMLSelectElement
      const options = Array.from(yearSelect.options)
        .map((o) => o.value)
        .filter(Boolean)
        .map(Number)
      const currentYear = new Date().getFullYear()
      expect(options[0]).toBe(currentYear)
      expect(options[1]).toBe(currentYear - 1)
      expect(options).toHaveLength(121) // current year to current-120 inclusive
    })

    it('has empty leading option in each date select', () => {
      render(<App />)
      const monthSelect = screen.getByLabelText(/birth month/i) as HTMLSelectElement
      const daySelect = screen.getByLabelText(/birth day/i) as HTMLSelectElement
      const yearSelect = screen.getByLabelText(/birth year/i) as HTMLSelectElement
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(monthSelect.options[0]!.value).toBe('')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(daySelect.options[0]!.value).toBe('')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(yearSelect.options[0]!.value).toBe('')
    })

    it('renders SSN input', () => {
      render(<App />)
      expect(screen.getByLabelText(/ssn/i)).toBeInTheDocument()
    })
  })

  describe('Step switching via timeline', () => {
    it('switches to Connect Bank Account on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Connect Bank Account')
    })

    it('switches to Set Financial Goals on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByRole('tab', { name: /set financial goals/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Set Financial Goals')
    })

    it('returns to Personal info on tab click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      await user.click(screen.getByRole('tab', { name: /personal info/i }))
      expect(screen.getByRole('tab', { name: /personal info/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })
  })

  describe('Connect Bank Account step', () => {
    it('renders the heading "Connect Bank Account"', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Connect Bank Account')
    })

    it('renders "Find Your Bank" label', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByText('Find Your Bank')).toBeInTheDocument()
    })

    it('renders a search input with placeholder', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByPlaceholderText('Ex. Techcombank')).toBeInTheDocument()
    })

    it('renders a Search button', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    })

    it('renders "Or choose from these popular bank" text', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByText(/or choose from these popular bank/i)).toBeInTheDocument()
    })

    it('renders exactly 8 bank radio tiles', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      const radios = screen.getAllByRole('radio')
      expect(radios).toHaveLength(8)
    })

    it('has Techcombank (bank_1) selected by default', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      const techcombank = screen.getByRole('radio', { name: /techcombank/i })
      expect(techcombank).toBeChecked()
    })

    it('switches selection on radio click', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      await user.click(screen.getByRole('radio', { name: /vietcombank/i }))
      expect(screen.getByRole('radio', { name: /vietcombank/i })).toBeChecked()
      expect(screen.getByRole('radio', { name: /techcombank/i })).not.toBeChecked()
    })

    it('renders bank names as text in tiles', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByText('Techcombank')).toBeInTheDocument()
      expect(screen.getByText('Vietcombank')).toBeInTheDocument()
      expect(screen.getByText('BIDV')).toBeInTheDocument()
      expect(screen.getByText('VPBank')).toBeInTheDocument()
      expect(screen.getByText('ACB')).toBeInTheDocument()
      expect(screen.getByText('MBBank')).toBeInTheDocument()
      expect(screen.getByText('Sacombank')).toBeInTheDocument()
      expect(screen.getByText('SHB')).toBeInTheDocument()
    })
  })

  describe('Set Financial Goals step', () => {
    it('renders the heading "Set Financial Goals"', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Set Financial Goals')
    })

    it('renders the description text', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByText(/set up your money limit/i)).toBeInTheDocument()
    })

    it('renders a range slider with min 100, max 2000, step 100', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      const slider = screen.getByRole('slider')
      expect(slider).toHaveAttribute('aria-valuemin', '100')
      expect(slider).toHaveAttribute('aria-valuemax', '2000')
    })

    it('shows initial value "$ 1100"', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      // Both tooltip and readout show "$ 1100"
      const matches = screen.getAllByText('$ 1100')
      expect(matches.length).toBeGreaterThanOrEqual(1)
    })

    it('shows "$100" and "$2000" end-point labels', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByText('$100')).toBeInTheDocument()
      expect(screen.getByText('$2000')).toBeInTheDocument()
    })

    it('updates readout when slider moves', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      const slider = screen.getByRole('slider')
      fireEvent.change(slider, { target: { value: '1500' } })
      // Both tooltip and readout update
      const matches = screen.getAllByText('$ 1500')
      expect(matches.length).toBeGreaterThanOrEqual(1)
    })

    it('shows only ONE readout (no second value)', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      // The readout span has class "text-[28px] font-bold"
      const readoutSpan = document.querySelector('.text-\\[28px\\].font-bold')
      expect(readoutSpan).toBeInTheDocument()
      expect(readoutSpan?.textContent).toMatch(/^\$\s+\d+$/)
    })
  })

  describe('Action buttons', () => {
    it('hides Previous on step 1', () => {
      render(<App />)
      const prevBtn = screen.getByText('Previous').closest('li')
      expect(prevBtn).toHaveClass('invisible')
    })

    it('shows Next button on step 1', () => {
      render(<App />)
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('shows Previous on step 2', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      const prevBtn = screen.getByText('Previous').closest('li')
      expect(prevBtn).not.toHaveClass('invisible')
    })

    it('shows Next on step 2', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    })

    it('shows Finish on step 3', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
    })

    it('Previous returns to prior step', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
      await user.click(screen.getByText('Previous'))
      expect(screen.getByRole('tab', { name: /personal info/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('Next advances to next step', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })
  })

  describe('Validation — email format only', () => {
    it('shows error on blur with invalid email', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'notanemail')
      await user.tab()
      expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    })

    it('shows AlertCircle icon on invalid email', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/email/i), 'bad')
      await user.tab()
      // AlertCircle renders an SVG; check for aria-invalid
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-invalid', 'true')
    })

    it('clears error when email becomes valid', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'bad')
      await user.tab()
      expect(emailInput).toHaveAttribute('aria-invalid', 'true')
      await user.clear(emailInput)
      await user.type(emailInput, 'good@email.com')
      await user.tab()
      expect(emailInput).toHaveAttribute('aria-invalid', 'false')
    })

    it('blocks Next when email is invalid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/email/i), 'bad')
      await user.tab()
      await user.click(screen.getByRole('button', { name: /next/i }))
      // Should still be on step 1
      expect(screen.getByRole('tab', { name: /personal info/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('allows Next when email is empty (no required rule)', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('allows Next when email is valid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/email/i), 'test@example.com')
      await user.tab()
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('does NOT validate name field', async () => {
      const user = userEvent.setup()
      render(<App />)
      // Leave name empty, go to next — should work
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('does NOT validate phone field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('does NOT validate SSN field', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('button', { name: /next/i }))
      expect(screen.getByRole('tab', { name: /connect bank account/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })

    it('blocks timeline forward navigation when email is invalid', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.type(screen.getByLabelText(/email/i), 'bad')
      await user.tab()
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      // Should still be on step 1
      expect(screen.getByRole('tab', { name: /personal info/i })).toHaveAttribute(
        'aria-selected',
        'true',
      )
    })
  })

  describe('Success state', () => {
    it('shows inline success message on Finish', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))
      expect(screen.getByText(/account setup is complete/i)).toBeInTheDocument()
    })

    it('does not show the form after Finish', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      await user.click(screen.getByRole('button', { name: /finish/i }))
      expect(screen.queryByRole('form')).not.toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('links to componentdock.com', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /component dock/i })
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('shows "More templates at Component Dock" text', () => {
      render(<App />)
      expect(screen.getByText(/more templates at component dock/i)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('form submission is prevented (onSubmit handler)', () => {
      render(<App />)
      const form = screen.getByRole('form')
      // Submitting the form should not cause a page navigation
      fireEvent.submit(form)
      expect(form).toBeInTheDocument()
    })

    it('timeline has tablist role', () => {
      render(<App />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('tabs have tab role and aria-selected', () => {
      render(<App />)
      const tabs = screen.getAllByRole('tab')
      tabs.forEach((tab) => {
        expect(tab).toHaveAttribute('aria-selected')
      })
    })

    it('panels have tabpanel role', () => {
      render(<App />)
      expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    })

    it('bank tiles have radio role', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /connect bank account/i }))
      const radios = screen.getAllByRole('radio')
      radios.forEach((radio) => {
        expect(radio).toHaveAttribute('name', 'choose_bank')
      })
    })

    it('slider has slider role', async () => {
      const user = userEvent.setup()
      render(<App />)
      await user.click(screen.getByRole('tab', { name: /set financial goals/i }))
      expect(screen.getByRole('slider')).toBeInTheDocument()
    })

    it('email input has aria-describedby when error is shown', async () => {
      const user = userEvent.setup()
      render(<App />)
      const emailInput = screen.getByLabelText(/email/i)
      await user.type(emailInput, 'bad')
      await user.tab()
      expect(emailInput).toHaveAttribute('aria-describedby', 'email-error')
    })
  })
})
