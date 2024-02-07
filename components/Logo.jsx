import Image from "next/image"
import Link from "next/link"


const Logo = () => {
  return (
    <Link href="/">
      <Image src='/logo.svg' width={120} height={25} priority alt="logo" />
    </Link>
  )
}

export default Logo