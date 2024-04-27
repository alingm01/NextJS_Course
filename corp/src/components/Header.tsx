import Link from "next/link"

const Header = () => {
  return (
    <>
    <Link href='/'>Home</Link>
    <Link href='/performance'>Performance</Link>
    <Link href='/reliability'>Reliability</Link>
    <Link href='/scale'>Scale</Link>
    </>
  )
}

export default Header