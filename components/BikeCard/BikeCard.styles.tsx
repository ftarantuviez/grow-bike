import styled from "@emotion/styled";
import Link from "next/link";

type DivProps = {
  backgroundColor: string;
};
export const StyledContainer = styled(Link)<DivProps>(
  ({ backgroundColor }) => ({
    position: "relative",
    height: "400px",
    "& .backgroundAnimation": {
      transition: "0.5s",
      background: "#fff",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      width: "100%",
      height: "45%",
      position: "absolute",
      zIndex: 0,
    },
    "&:hover": {
      "& .backgroundAnimation": {
        backgroundColor: backgroundColor,
      },
    },
  })
);
