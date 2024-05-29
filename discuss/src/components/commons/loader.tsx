"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";


interface formStatusChildren {
  children: React.ReactNode
}

export default function LoaderButton({children}: formStatusChildren) {

  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>{children}</Button>
  )
}