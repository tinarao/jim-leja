"use client";

import React from "react";
import CopyButton from "./copy-button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

type CodeWithCopyProps = React.PropsWithChildren<{ valueToCopy: string }>;

const CodeWithCopy = ({ children, valueToCopy }: CodeWithCopyProps) => {
  return (
    <div className="my-2 flex items-center gap-x-2 rounded-md bg-black p-2">
      <CopyButton
        afterCopy={() => toast.success("Ключ скопирован!")}
        afterError={() => toast.error("Не удалось скопировать ключ!")}
        className="hover:bg-neutral-700"
        value={"JIM_PUBLIC_KEY=" + valueToCopy}
        size="icon"
        variant="ghost"
      >
        <Copy color="white" />
      </CopyButton>
      <code className="overflow-hidden text-ellipsis text-white">
        {children}
      </code>
    </div>
  );
};

export default CodeWithCopy;
