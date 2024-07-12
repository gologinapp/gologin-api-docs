import logo from '@/components/icons/gologin_logo_512x512.png'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return <div>
    <Image
      src={logo}
      alt=""
      className="h-6 w-6 inline-block mr-2"
      unoptimized
      />
    <span className='inline-block h-6 leading-[24px] font-semibold align-middle	'>GoLogin</span>
  </div>
}
