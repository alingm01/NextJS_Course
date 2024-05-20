import Link from "next/link";
import * as actions from '@/actions';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { auth } from '@/auth';

export default async function Header() {

  const session = await auth();

  let authContent: React.ReactNode;
  if(session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  } else {
    authContent = <>
      <NavbarItem>
        <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
      </NavbarItem>

      <NavbarItem>
        <Button type="submit" color="primary" variant="flat">Sign Out</Button>
      </NavbarItem>
    </>
  }

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href='/' className="font-bold">Discuss</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  )

}