import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, Typography } from "@pankod/refine-mui";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
         <Typography>Real-Estate</Typography>
        ) : (
          <Typography>
            Real-Estate
          </Typography>
        )}
      </Link>
    </Button>
  );
};
