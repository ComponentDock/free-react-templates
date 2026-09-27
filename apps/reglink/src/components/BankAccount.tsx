import { Search } from 'lucide-react'
import type { ChangeEvent } from 'react'

const banks = [
  { id: 'bank1', name: 'Chase', seed: 'chase' },
  { id: 'bank2', name: 'Bank of America', seed: 'bofa' },
  { id: 'bank3', name: 'Wells Fargo', seed: 'wells' },
  { id: 'bank4', name: 'Citibank', seed: 'citi' },
  { id: 'bank5', name: 'Capital One', seed: 'capital' },
  { id: 'bank6', name: 'US Bank', seed: 'usbank' },
]

interface BankAccountProps {
  selectedBank: string
  onBankSelect: (bankId: string) => void
  searchQuery: string
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function BankAccount({
  selectedBank,
  onBankSelect,
  searchQuery,
  onSearchChange,
}: BankAccountProps) {
  const filteredBanks = banks.filter((bank) =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div>
      <h2 className="mb-2 text-[22px] font-bold text-[var(--color-heading)]">
        Connect Bank Account
      </h2>
      <p className="mb-6 text-[14px] font-semibold text-[var(--color-body)]">
        Find and connect your bank account to start managing your finances.
      </p>

      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder="Find Your Bank"
          aria-label="Find Your Bank"
          value={searchQuery}
          onChange={onSearchChange}
          className="w-full border border-[var(--color-border)] bg-white py-2 pl-10 pr-3 text-[14px] font-semibold text-[var(--color-heading)] outline-none focus:border-[var(--color-step-active)]"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredBanks.map((bank) => (
          <label
            key={bank.id}
            className={`flex cursor-pointer flex-col items-center gap-2 rounded border p-3 transition-colors ${
              selectedBank === bank.id
                ? 'border-[var(--color-step-active)] bg-[var(--color-step-active)]/10'
                : 'border-[var(--color-border)] hover:border-[var(--color-step-active)]/50'
            }`}
          >
            <input
              type="radio"
              name="bank"
              value={bank.id}
              checked={selectedBank === bank.id}
              onChange={() => onBankSelect(bank.id)}
              className="sr-only"
            />
            <img
              src={`https://picsum.photos/seed/reglink-${bank.seed}/80/50`}
              alt={bank.name}
              className="h-[50px] w-[80px] rounded object-cover"
            />
            <span className="text-[12px] font-semibold text-[var(--color-body)]">{bank.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
