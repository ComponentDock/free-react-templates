import { useState } from 'react'
import { Search, Landmark } from 'lucide-react'

const BANKS = [
  { id: 'bank_1', name: 'Techcombank' },
  { id: 'bank_2', name: 'Vietcombank' },
  { id: 'bank_3', name: 'BIDV' },
  { id: 'bank_4', name: 'VPBank' },
  { id: 'bank_5', name: 'ACB' },
  { id: 'bank_6', name: 'MBBank' },
  { id: 'bank_7', name: 'Sacombank' },
  { id: 'bank_8', name: 'SHB' },
] as const

export function BankStep() {
  const [selectedBank, setSelectedBank] = useState('bank_1')

  return (
    <div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
      <h2 className="mb-0 text-[30px] font-bold text-ink dark:text-ink-dark">
        Connect Bank Account
      </h2>
      <p className="mb-[40px] text-[14px] text-desc">
        Please enter your information and proceed to next step so we can build your account
      </p>

      <div className="w-full max-w-[680px]">
        {/* Find Your Bank */}
        <label className="mb-[10px] block text-[16px] text-ink dark:text-ink-dark">
          Find Your Bank
        </label>
        <div className="relative flex items-center border-b border-line pb-[70px]">
          <span className="absolute left-5 top-3 text-muted" aria-hidden="true">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Ex. Techcombank"
            aria-label="Search banks"
            className="h-[50px] w-full border border-line bg-container pl-[55px] pr-5 text-[14px] text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-accent dark:border-line dark:bg-container-dark dark:text-ink-dark"
          />
          <button
            type="button"
            className="ml-[20px] h-[50px] w-[150px] flex-shrink-0 bg-search-btn text-[14px] font-normal text-white hover:bg-search-btn-hover focus-visible:outline-2 focus-visible:outline-accent"
          >
            Search
          </button>
        </div>

        {/* Choose from popular banks */}
        <p className="py-[30px] text-[14px] text-muted-dark">Or choose from these popular bank</p>

        <fieldset className="border-none p-0">
          <legend className="sr-only">Select a bank</legend>
          <div className="flex flex-wrap gap-0 max-[480px]:gap-x-[-5px] max-[480px]:gap-y-[5px]">
            {BANKS.map((bank) => (
              <div
                key={bank.id}
                className="px-[15px] pb-[25px] max-[480px]:px-[5px] max-[480px]:pb-[5px]"
              >
                <input
                  type="radio"
                  name="choose_bank"
                  id={bank.id}
                  value={bank.id}
                  checked={selectedBank === bank.id}
                  onChange={() => setSelectedBank(bank.id)}
                  className="peer sr-only"
                />
                <label
                  htmlFor={bank.id}
                  className={`flex h-[133px] w-[223px] cursor-pointer flex-col items-center justify-center border bg-container transition-colors hover:border-accent peer-focus-visible:outline-2 peer-focus-visible:outline-accent max-[1024px]:h-[120px] max-[1024px]:w-[190px] max-[992px]:h-[65px] max-[992px]:w-[100px] max-[480px]:h-[61px] max-[480px]:w-[90px] ${
                    selectedBank === bank.id ? 'border-accent' : 'border-transparent'
                  } dark:bg-container-dark`}
                >
                  <Landmark
                    size={40}
                    className="mb-2 text-accent max-[992px]:mb-1 max-[992px]:h-[20px] max-[992px]:w-[20px]"
                    aria-hidden="true"
                  />
                  <span className="text-[14px] font-bold text-ink max-[992px]:text-[10px] dark:text-ink-dark">
                    {bank.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  )
}
