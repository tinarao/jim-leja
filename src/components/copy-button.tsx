"use client";

import { Button } from "./ui/button";

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  afterCopy?: () => void;
  afterError?: () => void;
  value: string;
};

const CopyButton = ({
  value,
  afterCopy,
  afterError,
  ...props
}: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      afterCopy?.();
    } catch (err) {
      afterError?.();
      console.error(err);
    }
  };

  return (
    <Button onClick={handleCopy} {...props}>
      {props.children}
    </Button>
  );
};

export default CopyButton;
